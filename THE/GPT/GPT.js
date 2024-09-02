document.getElementById('highlightBtn').onclick = function() {
    // Lấy phần tử div chứa văn bản
    let textContainer = document.getElementById('textContainer');
    
    // Lấy nội dung văn bản bên trong div
    let text = textContainer.innerText;

    // Tách văn bản thành các từ
    let words = text.split(' ');

    // Tạo một mảng để chứa các từ đã được xử lý
    let highlightedWords = words.map(function(word) {
        let length = word.length;
        let halfLength;

        // Kiểm tra số chữ cái lẻ hay chẵn
        if (length % 2 === 0) {
            halfLength = length / 2;
        } else {
            halfLength = Math.floor(length / 2) + 1;
        }

        // Tách từ thành 2 phần: phần tô đậm và phần không tô đậm
        let firstPart = word.substring(0, halfLength);
        let secondPart = word.substring(halfLength);

        // Gắn thêm thẻ <span> để tô đậm phần đầu tiên
        return `<span class="highlight">${firstPart}</span>${secondPart}`;
    });

    // Gộp các từ đã xử lý thành chuỗi và cập nhật lại nội dung div
    textContainer.innerHTML = highlightedWords.join(' ');
};