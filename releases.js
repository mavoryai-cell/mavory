/* ===== แก้ไฟล์นี้ไฟล์เดียวเมื่อมี MAVORY เวอร์ชันใหม่ — ทั้งหน้าแรกและหน้าดาวน์โหลดจะเปลี่ยนตาม =====
version : เลขรุ่นล่าสุด date : วันที่อัปเดต (เว้นว่างได้) notes : รายการ "มีอะไรใหม่" (เว้นว่างได้)
url : ลิงก์ดาวน์โหลดจาก Google Drive (ว่างไว้ = ปุ่มขึ้นว่า "ยังไม่มีลิงก์")
label : ข้อความบนปุ่มหลัก (เว้นได้) alt : ปุ่มดาวน์โหลดที่สอง { url, label } (เว้นได้)
manual : ลิงก์วิดีโอสอนของอุปกรณ์นั้น (ว่างไว้ = ปุ่มขึ้นว่า "ยังไม่มีคู่มือ") */
window.MAVORY_RELEASE = {
version: "12.6.6",
date: "",
notes: [],
downloads: [
{ id: "windows", name: "Windows", kind: "โปรแกรมสำหรับคอมพิวเตอร์", desc: "เลือกแบบติดตั้ง (แนะนำ) หรือแบบพกพาไม่ต้องติดตั้ง · เปิดโปรแกรมแล้วอัปเดตเป็นรุ่นล่าสุดเองในแอป", ver: "v12.0.3",
url: "https://drive.google.com/file/d/1XEiSEup5VJFfvcDJssY0I1Fxfn50FQDH/view", label: "ดาวน์โหลดแบบติดตั้ง (แนะนำ)",
alt: { url: "https://drive.google.com/file/d/18Lk7rwMcJ_TkpZbqwp8cWH0IFcJjIhFO/view", label: "ดาวน์โหลดแบบพกพา (Portable รุ่น 11.0.9)" }, manual: "https://youtu.be/Iyg3WrSMhKA" },
{ id: "macos", name: "macOS", kind: "โปรแกรมสำหรับ Mac", desc: "ติดตั้งบนเครื่อง Mac (MacBook, iMac, Mac mini) — ไฟล์ .zip แตกไฟล์แล้วลากแอปไปไว้ที่ Applications · เปิดโปรแกรมแล้วอัปเดตเป็นรุ่นล่าสุดเองในแอป", ver: "v11.0.9",
url: "https://drive.google.com/file/d/1Hzt8eDo_t3jgVSveGeaEO8L3J_NMgU2v/view", label: "ดาวน์โหลด Mac ชิป M1 ขึ้นไป",
alt: { url: "https://drive.google.com/file/d/1L3f43efjXjHzVbUk-cjQXlXOhLEZwqSt/view", label: "ดาวน์โหลด Mac ชิป Intel" }, manual: "https://youtu.be/Iyg3WrSMhKA" },
{ id: "android", name: "Android", kind: "แอปสำหรับมือถือ", desc: "ติดตั้งบนมือถือและแท็บเล็ต Android", ver: "v12.6.6",
url: "https://drive.google.com/file/d/1Sz0Xv2ZrWvAqRLZxxadY9KftK28l9pnR/view", manual: "https://www.youtube.com/watch?v=zel6ZeDYyNI" },
{ id: "extension", name: "ส่วนขยาย Chrome", kind: "Extension สำหรับ Google Chrome", desc: "ใช้งานผ่านเบราว์เซอร์ Google Chrome บนคอมพิวเตอร์", ver: "v12.6.6",
url: "https://drive.google.com/file/d/1tHUKM-BkPgOAv6IUjJPMDDDBtTrepu5d/view", manual: "https://www.youtube.com/watch?v=q_pI_QFB3Mo" }
],
flow: {
full: { version: "v2.4", url: "https://flow.google.com/shared/tool/42ac819b-41ac-4610-a6c8-745d4e3e8086" },
trial: { version: "รุ่น t7.3", url: "https://flow.google.com/shared/tool/e7e9a5ca-49b3-4dd7-ac14-85565ffd5366" }
},
manuals: [
{ title: "ติดตั้งส่วนขยาย MAVORY บน Chrome (Windows)", note: "วิดีโอสอนติดตั้งและเริ่มใช้งานส่วนขยายบนคอมพิวเตอร์", url: "https://www.youtube.com/watch?v=q_pI_QFB3Mo" },
{ title: "ติดตั้ง MAVORY บน Android", note: "วิดีโอสอนติดตั้งแอปบนมือถือ", url: "https://www.youtube.com/watch?v=zel6ZeDYyNI" },
{ title: "วิธีใช้งาน MAVORY Flow (Google Flow)", note: "วิดีโอสอนใช้งานเครื่องมือบน Google Flow", url: "https://www.youtube.com/watch?v=2WslDLDL6Cw" }
]
};
