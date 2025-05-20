mod info;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            let handle = app.handle();
            if cfg!(debug_assertions) {
                handle
                    .plugin(
                        tauri_plugin_log::Builder::default()
                            .level(log::LevelFilter::Info)
                            .build(),
                    )
                    .unwrap();
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![info::info::get_info])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
