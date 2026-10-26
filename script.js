const copyButton = document.querySelector(".copy-template");
const toast = document.getElementById("toast");
const menuButton = document.querySelector(".menu-btn");
const navigation = document.getElementById("site-nav");

const requestTemplate = `【委托投递】
曲名：
希望档期：
使用音源：
是否需要混音：
UST / 工程情况：
参考 / 补充说明：`;

copyButton?.addEventListener("click", async () => {
  if (!toast) return;

  try {
    await navigator.clipboard.writeText(requestTemplate);
    toast.textContent = "委托模板已复制";
  } catch {
    toast.textContent = "复制失败，请手动复制";
  }

  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
});

if (menuButton && navigation) {
  const closeMenu = () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "打开菜单");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "关闭菜单" : "打开菜单");
  });

  navigation.addEventListener("click", closeMenu);
}
