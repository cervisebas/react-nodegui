cmake_minimum_required(VERSION 3.21)

# -------------- Plugin Config ---------------
execute_process(
  COMMAND node -p "require('@nodegui/nodegui/plugin').CMAKE_HELPER_FILE"
  WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
  OUTPUT_VARIABLE NODEGUI_PLUGIN_CMAKE_HELPER
)

string(REPLACE "\n" "" NODEGUI_PLUGIN_CMAKE_HELPER ${NODEGUI_PLUGIN_CMAKE_HELPER})
string(REPLACE "\"" "" NODEGUI_PLUGIN_CMAKE_HELPER ${NODEGUI_PLUGIN_CMAKE_HELPER})

include("${NODEGUI_PLUGIN_CMAKE_HELPER}")

# -------------- User Config ---------------
set(PLUGIN_ADDON_NAME "nodegui_plugin_animation")
project(${PLUGIN_ADDON_NAME})

# -------------- Plugin Library ---------------
add_library(${PLUGIN_ADDON_NAME} SHARED  
    "${CMAKE_JS_SRC}"
    "${PROJECT_SOURCE_DIR}/src/cpp/main.cpp"
    "${PROJECT_SOURCE_DIR}/src/cpp/QPropertyAnimation/qpropertyanimation_wrap.cpp"
    "${PROJECT_SOURCE_DIR}/src/cpp/QPropertyAnimation/npropertyanimation.hpp"
    "${PROJECT_SOURCE_DIR}/src/cpp/QVariantAnimation/qvariantanimation_wrap.cpp"
    "${PROJECT_SOURCE_DIR}/src/cpp/QVariantAnimation/nvariantanimation.hpp"
) 

# Esta macro llama internamente a find_package(Qt6)
AddPluginConfig(${PLUGIN_ADDON_NAME})

# -------- MacOS AGL FIX (Stub Binario) --------
if(APPLE)
    message(STATUS "Generando Stub binario para AGL para satisfacer al linker...")

    set(MOCK_DIR "${CMAKE_BINARY_DIR}/framework_mocks")
    file(MAKE_DIRECTORY "${MOCK_DIR}/AGL.framework")
    
    # En lugar de touch, compilamos un binario mínimo (Stub)
    # Esto crea una librería dinámica real pero vacía que el linker aceptará
    execute_process(
        COMMAND clang -dynamiclib 
        -o "${MOCK_DIR}/AGL.framework/AGL" 
        -x c /dev/null 
        -current_version 1.0 
        -compatibility_version 1.0 
        -install_name /System/Library/Frameworks/AGL.framework/Versions/A/AGL
    )

    # Añadimos la ruta de búsqueda de frameworks
    target_link_options(${PLUGIN_ADDON_NAME} PRIVATE "-F${MOCK_DIR}")
    
    # Limpieza de los targets de Qt (esencial para evitar conflictos)
    set(QT_TARGETS Qt6::Gui Qt6::Widgets Qt6::Core)
    foreach(qt_target ${QT_TARGETS})
        if(TARGET ${qt_target})
            get_target_property(TARGET_LIBS ${qt_target} INTERFACE_LINK_LIBRARIES)
            if(TARGET_LIBS)
                list(REMOVE_ITEM TARGET_LIBS "-framework AGL")
                set_target_properties(${qt_target} PROPERTIES INTERFACE_LINK_LIBRARIES "${TARGET_LIBS}")
            endif()
        endif()
    endforeach()

    # Mantenemos esta bandera por seguridad
    target_link_options(${PLUGIN_ADDON_NAME} PRIVATE "-Wl,-undefined,dynamic_lookup")
    
    # Fix RPATH for NodeGUI miniqt
    set_target_properties(${PLUGIN_ADDON_NAME} PROPERTIES BUILD_WITH_INSTALL_RPATH TRUE)
    set_target_properties(${PLUGIN_ADDON_NAME} PROPERTIES INSTALL_RPATH "@loader_path/../../node_modules/@nodegui/nodegui/miniqt/6.10.2/macos/lib;@loader_path/../../../node_modules/@nodegui/nodegui/miniqt/6.10.2/macos/lib")
endif()

# -------------- Includes ---------------
target_include_directories(${PLUGIN_ADDON_NAME} PRIVATE 
    "${CMAKE_JS_INC}" 
    "${PROJECT_SOURCE_DIR}"
    "${PROJECT_SOURCE_DIR}/src/cpp"
)

# -------------- Link Libraries ---------------
target_link_libraries(${PLUGIN_ADDON_NAME} PRIVATE
    "${CMAKE_JS_LIB}"
    Qt6::Core
    Qt6::Gui
    Qt6::Widgets
)
