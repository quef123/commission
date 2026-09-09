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
    toast.textContent = "REQUEST TEMPLATE COPIED.";
  }catch(e){
    toast.textContent = "COPY FAILED.";
  }
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1800);
});

document.querySelector(".menu-btn")?.addEventListener("click", () => {
  const nav = document.querySelector(".topbar nav");
  if(!nav) return;
  const isOpen = nav.dataset.open === "1";
  if(isOpen){
    nav.removeAttribute("style");
    nav.dataset.open = "0";
  }else{
    Object.assign(nav.style,{
      display:"flex",
      position:"absolute",
      top:"58px",
      left:"0",
      right:"0",
      flexDirection:"column",
      gap:"14px",
      padding:"16px 24px",
      background:"#efefec",
      borderBottom:"1px solid #1c1c1c"
    });
    nav.dataset.open = "1";
  }
});
