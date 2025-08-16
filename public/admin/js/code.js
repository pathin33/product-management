//bộ lọc trạng thái
const button = document.querySelectorAll("[button-status]");
if (button.length > 0) {
    //lấy url
    let url = new URL(window.location.href);
    button.forEach((item) => {
        item.addEventListener("click", () => {
            const status = item.getAttribute("button-status");
            //lấy ra trạng thái từ class đã set riêng cho từng nút bấm trước đó
            if (status) {
                url.searchParams.set("status", status);
                // status là giá trị lấy từ attribute "button-status" của nút được click
                // => dùng để set lại tham số status trên URL

            }
            else {
                url.searchParams.delete("status");
                //nếu biến trạng thái ko có thì xoá params
            }
            window.location.href = url.href;
            //chuyển hướng đến url tại mỗi nút bấm
        });
    });

}
// end bộ lọc trạng thái

//tìm kiếm
const inputSearch = document.getElementById("inputSearch");
const fromSearch = document.getElementById("form-search");
fromSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    let url = new URL(window.location.href);
    const valueSearch = inputSearch.value;
    if (valueSearch) {
        url.searchParams.set("keyword", valueSearch);
    }
    else {
        url.searchParams.delete("keyword");
    }
    window.location.href = url.href;

});
// end tìm kiếm