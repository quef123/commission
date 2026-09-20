const btn = document.querySelector(".copy-template");
const toast = document.getElementById("toast");

btn?.addEventListener("click", async () => {
  const template = `【委托投递】
曲名：
希望档期：
使用音源：
是否需要混音：
UST / 工程情况：
参考 / 补充说明：`;

  try{
    await navigator.clipboard.writeText(template);
    toast.textContent = "委托模板已复制";
  }catch(e){
    toast.textContent = "复制失败，请手动复制";
  }
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1800);
});

document.querySelector(".menu-btn")?.addEventListener("click", () => {
  const nav = document.querySelector(".topbar nav");
  if (!nav) return;
  const open = nav.dataset.open === "1";

  if (open) {
    nav.removeAttribute("style");
    nav.dataset.open = "0";
    return;
  }

  Object.assign(nav.style, {
    display: "flex",
    position: "absolute",
    top: "68px",
    left: "0",
    right: "0",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "14px",
    padding: "18px 20px 22px",
    background: "#fff",
    borderBottom: "1px solid #d9d9d9"
  });
  nav.dataset.open = "1";
});
