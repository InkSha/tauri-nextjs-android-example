use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct DeviceInfo {
    pub name: String,
    pub system: String,
    pub version: String,
}

#[cfg(target_os = "android")]
#[tauri::command]
pub fn get_info() -> DeviceInfo {
    DeviceInfo {
        name: String::from("android phone"),
        system: String::from("android"),
        version: super::android::get_version(),
    }
}

#[cfg(not(target_os = "android"))]
#[tauri::command]
pub fn get_info() -> DeviceInfo {
    DeviceInfo {
        name: String::from("default name"),
        system: String::from("windows"),
        version: String::from("0.0.0"),
    }
}
