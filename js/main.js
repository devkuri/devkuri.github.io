// Lắng nghe sự kiện cuộn trang
window.addEventListener("scroll", function () {
	var scrollToTopBtn = document.getElementById("scrollToTopBtn");

	if (document.documentElement.scrollTop > 100) {
		scrollToTopBtn.style.display = "block";
	} else {
		scrollToTopBtn.style.display = "none";
	}
});

// Lắng nghe sự kiện click để cuộn lên đầu trang
document.getElementById("scrollToTopBtn").addEventListener("click", function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
	alert("hello")
});

function scrollOnTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
}
