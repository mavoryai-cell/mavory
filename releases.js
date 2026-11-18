/* ===== แก้ไฟล์นี้ไฟล์เดียวเมื่อมี MAVORY เวอร์ชันใหม่ — ทั้งหน้าแรกและหน้าดาวน์โหลดจะเปลี่ยนตาม =====
version : เลขรุ่นล่าสุด date : วันที่อัปเดต (เว้นว่างได้) notes : รายการ "มีอะไรใหม่" (เว้นว่างได้)
url : ลิงก์ดาวน์โหลดจาก Google Drive (ว่างไว้ = ปุ่มขึ้นว่า "ยังไม่มีลิงก์")
label : ข้อความบนปุ่มหลัก (เว้นได้) alt : ปุ่มดาวน์โหลดที่สอง { url, label } (เว้นได้)
manual : ลิงก์วิดีโอสอนของอุปกรณ์นั้น (ว่างไว้ = ปุ่มขึ้นว่า "ยังไม่มีคู่มือ") */
window.MAVORY_RELEASE = {
version: "11.0.0",
date: "",
notes: [],
downloads: [
{ id: "windows", name: "Windows", kind: "โปรแกรมสำหรับคอมพิวเตอร์", desc: "เลือกแบบติดตั้ง (แนะนำ) หรือแบบพกพาไม่ต้องติดตั้ง · เปิดโปรแกรมแล้วอัปเดตเป็นรุ่นล่าสุดเองในแอป", ver: "v10.9.9",
url: "https://drive.google.com/file/d/1pSqbnUZlfXxaEu_2AXQ1rX1dJE1TF_0W/view", label: "ดาวน์โหลดแบบติดตั้ง (แนะนำ)",
alt: { url: "https://drive.google.com/file/d/14y2SnU_RVfYTTM6MMq5pjc1YGHt_0xng/view", label: "ดาวน์โหลดแบบพกพา (Portable · รุ่น 10.1.7)" }, manual: "" },
{ id: "macos", name: "macOS", kind: "โปรแกรมสำหรับ Mac", desc: "ติดตั้งบนเครื่อง Mac (MacBook, iMac, Mac mini) — ไฟล์ .zip แตกไฟล์แล้วลากแอปไปไว้ที่ Applications · เปิดโปรแกรมแล้วอัปเดตเป็นรุ่นล่าสุดเองในแอป", ver: "v10.9.9",
url: "https://drive.google.com/file/d/1dbU9z-pJ9QaEczr-9RRr7Gk97FXHhDbT/view", label: "ดาวน์โหลด Mac ชิป M1 ขึ้นไป",
alt: { url: "https://drive.google.com/file/d/12Ue3HkbvFE-qpCLYzEYm7vcv_gjkVO_r/view", label: "ดาวน์โหลด Mac ชิป Intel" }, manual: "" },
{ id: "android", name: "Android", kind: "แอปสำหรับมือถือ", desc: "ติดตั้งบนมือถือและแท็บเล็ต Android", ver: "v11.0.0",
url: "https://drive.google.com/file/d/1X2ve71yJ8Fc6yWv3a2OuCG6qbWcscUn7/view", manual: "https://www.youtube.com/watch?v=zel6ZeDYyNI" },
{ id: "extension", name: "ส่วนขยาย Chrome", kind: "Extension สำหรับ Google Chrome", desc: "ใช้งานผ่านเบราว์เซอร์ Google Chrome บนคอมพิวเตอร์", ver: "v11.0.0",
url: "https://drive.google.com/file/d/1pPLXIBMN68lJSrY02hcq9e-lUHGBGFUG/view", manual: "https://www.youtube.com/watch?v=q_pI_QFB3Mo" }
],
flow: {
full: { version: "v2.0", url: "https://flow.google.com/shared/tool/e6e561fb-87ce-4347-8899-76c8c393f3f0" },
trial: { version: "รุ่น t6.2", url: "https://flow.google.com/shared/tool/d364cc7a-edb0-48d5-98ac-0e81b41a6588" }
},
manuals: [
{ title: "ติดตั้งส่วนขยาย MAVORY บน Chrome (Windows)", note: "วิดีโอสอนติดตั้งและเริ่มใช้งานส่วนขยายบนคอมพิวเตอร์", url: "https://www.youtube.com/watch?v=q_pI_QFB3Mo" },
{ title: "ติดตั้ง MAVORY บน Android", note: "วิดีโอสอนติดตั้งแอปบนมือถือ", url: "https://www.youtube.com/watch?v=zel6ZeDYyNI" },
{ title: "วิธีใช้งาน MAVORY Flow (Google Flow)", note: "วิดีโอสอนใช้งานเครื่องมือบน Google Flow", url: "https://www.youtube.com/watch?v=2WslDLDL6Cw" }
]
};
