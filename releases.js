/* ===== แก้ไฟล์นี้ไฟล์เดียวเมื่อมี MAVORY เวอร์ชันใหม่ — ทั้งหน้าแรกและหน้าดาวน์โหลดจะเปลี่ยนตาม =====
version : เลขรุ่นล่าสุด date : วันที่อัปเดต (เว้นว่างได้) notes : รายการ "มีอะไรใหม่" (เว้นว่างได้)
url : ลิงก์ดาวน์โหลดจาก Google Drive (ว่างไว้ = ปุ่มขึ้นว่า "ยังไม่มีลิงก์")
label : ข้อความบนปุ่มหลัก (เว้นได้) alt : ปุ่มดาวน์โหลดที่สอง { url, label } (เว้นได้)
manual : ลิงก์วิดีโอสอนของอุปกรณ์นั้น (ว่างไว้ = ปุ่มขึ้นว่า "ยังไม่มีคู่มือ") */
window.MAVORY_RELEASE = {
version: "11.1.9",
date: "",
notes: [],
downloads: [
{ id: "windows", name: "Windows", kind: "โปรแกรมสำหรับคอมพิวเตอร์", desc: "เลือกแบบติดตั้ง (แนะนำ) หรือแบบพกพาไม่ต้องติดตั้ง · เปิดโปรแกรมแล้วอัปเดตเป็นรุ่นล่าสุดเองในแอป", ver: "v11.0.9",
url: "https://drive.google.com/file/d/1tfQm8ayS70F-zHv9Das-AmK2K4tOu8RN/view", label: "ดาวน์โหลดแบบติดตั้ง (แนะนำ)",
alt: { url: "https://drive.google.com/file/d/18Lk7rwMcJ_TkpZbqwp8cWH0IFcJjIhFO/view", label: "ดาวน์โหลดแบบพกพา (Portable)" }, manual: "" },
{ id: "macos", name: "macOS", kind: "โปรแกรมสำหรับ Mac", desc: "ติดตั้งบนเครื่อง Mac (MacBook, iMac, Mac mini) — ไฟล์ .zip แตกไฟล์แล้วลากแอปไปไว้ที่ Applications · เปิดโปรแกรมแล้วอัปเดตเป็นรุ่นล่าสุดเองในแอป", ver: "v11.0.9",
url: "https://drive.google.com/file/d/1Hzt8eDo_t3jgVSveGeaEO8L3J_NMgU2v/view", label: "ดาวน์โหลด Mac ชิป M1 ขึ้นไป",
alt: { url: "https://drive.google.com/file/d/1L3f43efjXjHzVbUk-cjQXlXOhLEZwqSt/view", label: "ดาวน์โหลด Mac ชิป Intel" }, manual: "" },
{ id: "android", name: "Android", kind: "แอปสำหรับมือถือ", desc: "ติดตั้งบนมือถือและแท็บเล็ต Android", ver: "v11.1.9",
url: "https://drive.google.com/file/d/1GM3pS5R94MbrUXUkltsxPgeqTCEde7Ng/view", manual: "https://www.youtube.com/watch?v=zel6ZeDYyNI" },
{ id: "extension", name: "ส่วนขยาย Chrome", kind: "Extension สำหรับ Google Chrome", desc: "ใช้งานผ่านเบราว์เซอร์ Google Chrome บนคอมพิวเตอร์", ver: "v11.1.9",
url: "https://drive.google.com/file/d/1wp7S6J8SIayKBctG6o81esrINm-VkN0p/view", manual: "https://www.youtube.com/watch?v=q_pI_QFB3Mo" }
],
flow: {
full: { version: "v2.3", url: "https://flow.google.com/shared/tool/4640367d-86b6-4b48-a6d9-e70f61efa224" },
trial: { version: "รุ่น t7.2", url: "https://flow.google.com/shared/tool/4c3d9a44-1738-4315-9c72-ac9c16dbbf33" }
},
manuals: [
{ title: "ติดตั้งส่วนขยาย MAVORY บน Chrome (Windows)", note: "วิดีโอสอนติดตั้งและเริ่มใช้งานส่วนขยายบนคอมพิวเตอร์", url: "https://www.youtube.com/watch?v=q_pI_QFB3Mo" },
{ title: "ติดตั้ง MAVORY บน Android", note: "วิดีโอสอนติดตั้งแอปบนมือถือ", url: "https://www.youtube.com/watch?v=zel6ZeDYyNI" },
{ title: "วิธีใช้งาน MAVORY Flow (Google Flow)", note: "วิดีโอสอนใช้งานเครื่องมือบน Google Flow", url: "https://www.youtube.com/watch?v=2WslDLDL6Cw" }
]
};
