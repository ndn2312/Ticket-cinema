let url = window.location.href;
let url_segment = url.split('?');
// console.log(url_segment[1]);


let play_btn = document.getElementById('play');
let video = document.getElementById('video');


play_btn.addEventListener('click', () => {
     if (video.paused) {
        video.play();
        video.style.display ='unset';
        play_btn.classList.remove('bi-play-fill');
        play_btn.classList.add('bi-pause');

     } else {
        video.pause();
        video.style.display ='none';
        play_btn.classList.add('bi-play-fill');
        play_btn.classList.remove('bi-pause');
        
     }
}
)

video.addEventListener('ended', () =>{
    video.play();
})




let date = new Date();
let main_date = date.getDate();
// console.log((main_date))


Array.from(document.getElementsByClassName('date_point')).forEach((el) => {
    if (el.innerText == main_date) {
        el.classList.add('h6_active')
    }
})

let pvr = [
    {
        pvr: 'Aeon Mall Hà Đông',
        movie: 'Doraemon',
        title:'Doraemon: Nobita và bản giao hưởng địa cầu',
        time:' 1 giờ 15 phút',
        MPA:'P',
        Introduce1:'Đạo diễn:',
        Introduce2:'Imai Kazuaki',
        Introduce3:'Dựa trên:',
        Introduce4:'Doraemon bởi Fujiko F. Fujio',
        Introduce5:'Diễn Viên:',
        Introduce6:'Mizuta Wasabi,Seki Tomokazu,Kimura Subaru.Ohara Megumi.Kakazu Yumi',
        loc: 'Dương Nội, Hà Đông, Hà Nội',
        audi: 1,
        type: '2D',
        series: [ 'F', 'E', 'D', 'C', 'B', 'A' ],
        row_section: 3,
        seat: 18,
        F: [ 2, 6, 7, 16, 17, 13 ],
        E: [ 1, 2, 13, 8, 11 ],
        D: [ 5, 6, 15, 17 ],
        C: [ 2, 7, 8, 17 ],
        B: [ 5, 16, 15],
        A: [ 1, 2, 11, 12 ],
        price: [ 55.000, 60.000, 75.000, 75.000, 60.000, 55.000],
        date: 29,
        img: 'img/poster-phim-dien-anh-doraemon-43-scaled.jpg',
        video: 'video/PHIM ĐIỆN ẢNH DORAEMON- NOBITA VÀ BẢN GIAO HƯỞNG ĐỊA CẦU - TRAILER - DKKC- 05.2024.mp4',
        background: 'img/doraemon-nobita-va-ban-giao-huong-dia-cau-poster.jpg',
        // backgroundticket:'img/doraemon-nobita-va-ban-giao-huong-dia-cau-poster.jpg',

    },
    {
        pvr: 'Aeon Mall Hà Đông',
        movie: 'Doraemon',
        title:'Doraemon: Nobita và bản giao hưởng địa cầu',
        time:' 1 giờ 15 phút',
        MPA:'P',
        loc: 'Dương Nội, Hà Đông, Hà Nội',
        audi: 2,
        type: '2D',
        series: [ 'F', 'E', 'D', 'C', 'B', 'A' ],
        row_section: 3,
        seat: 18,
        F: [1,2,3,4,5,6,7],
        E: [0,1,2,3,4,5],
        D: [3,4,5,6,7,8],
        C: [7,8,9,0],
        B: [ 0],
        A: [ ],
        price: [ 55.000, 60.000, 75.000, 75.000, 60.000, 55.000],
        date: 30,
        img: 'img/poster-phim-dien-anh-doraemon-43-scaled.jpg',
        video: 'video/PHIM ĐIỆN ẢNH DORAEMON- NOBITA VÀ BẢN GIAO HƯỞNG ĐỊA CẦU - TRAILER - DKKC- 05.2024.mp4',
        // background: 'img/doraemon-nobita-va-ban-giao-huong-dia-cau-poster.jpg',
    },
    {
        pvr: 'Aeon Mall Hà Đông',
        movie: 'Doraemon',
        title:'Doraemon: Nobita và bản giao hưởng địa cầu',
        time:' 1 giờ 15 phút',
        MPA:'P',
        loc: 'Dương Nội, Hà Đông, Hà Nội',
        audi: 2,
        type: '2D',
        series: [ 'F', 'E', 'D', 'C', 'B', 'A' ],
        row_section: 3,
        seat: 18,
        F: [1,2,3,4,5,6,7],
        E: [0,1,2,3,4,5],
        D: [3,4,5,6,7,8],
        C: [7,8,9,0],
        B: [0],
        A: [1,2,3 ],
        price: [ 55.000, 60.000, 75.000, 75.000, 60.000, 55.000],
        date: 31,
        img: 'img/poster-phim-dien-anh-doraemon-43-scaled.jpg',
        video: 'video/PHIM ĐIỆN ẢNH DORAEMON- NOBITA VÀ BẢN GIAO HƯỞNG ĐỊA CẦU - TRAILER - DKKC- 05.2024.mp4',
        // background: 'img/doraemon-nobita-va-ban-giao-huong-dia-cau-poster.jpg',
    },
    {
        pvr: 'Aeon Mall Hà Đông',
        movie: 'Latmat7',
        title:'Lật mặt 7: Một điều ước',
        time:' 2 giờ 18 phút',
        MPA:'K',
        Introduce1:'Đạo diễn:',
        Introduce2:'Lý Hải',
        Introduce3:'',
        Introduce4:'',
        Introduce5:'Diễn Viên:',
        Introduce6:'Thanh Hiền, Trương Minh Cường, Đinh Y Nhung, Quách Ngọc Tuyên, Trâm Anh, Trần Kim Hải',
        loc: 'Dương Nội, Hà Đông, Hà Nội',
        audi: 1,
        type: '2D',
        series: [ 'F', 'E', 'D', 'C', 'B', 'A' ],
        row_section: 3,
        seat: 18,
        F: [],
        E: [0,1,2,3,4,5],
        D: [3,4,5,6,7,8],
        C: [],
        B: [],
        A: [ ],
        price: [ 55.000, 60.000, 75.000, 75.000, 60.000, 55.000],
        date: 29,
        img: 'img/latmat7.jpg',
        video: 'video/LẬT MẶT 7- MỘT ĐIỀU ƯỚC - OFFICIAL TRAILER - Khởi chiếu 26.04.2024.mp4.crdownload',
        background:'img/latmat7.jpg',
        // backgroundticket:'img/latmat7.jpg',
        
    },
    {
        pvr: 'Aeon Mall Hà Đông',
        movie: 'Latmat7',
        title:'Lật mặt 7: Một điều ước',
        time:' 2 giờ 18 phút',
        MPA:'K',
        loc: 'Dương Nội, Hà Đông, Hà Nội',
        audi: 1,
        type: '2D',
        series: [ 'F', 'E', 'D', 'C', 'B', 'A' ],
        row_section: 3,
        seat: 18,
        F: [],
        E: [0,1,2,3,4,5],
        D: [3,4,5,6,7,8],
        C: [1],
        B: [2],
        A: [3 ],
        price: [ 55.000, 60.000, 75.000, 75.000, 60.000, 55.000],
        date: 30,
        img: 'img/latmat7.jpg',
        video: 'video/LẬT MẶT 7- MỘT ĐIỀU ƯỚC - OFFICIAL TRAILER - Khởi chiếu 26.04.2024.mp4.crdownload',
        background:'img/latmat7.jpg',
        // backgroundticket:'img/latmat7.jpg'

        
    },
    {
        pvr: 'Aeon Mall Hà Đông',
        movie: 'Latmat7',
        title:'Lật mặt 7: Một điều ước',
        time:' 2 giờ 18 phút',
        MPA:'K',
        loc: 'Dương Nội, Hà Đông, Hà Nội',
        audi: 1,
        type: '2D',
        series: [ 'F', 'E', 'D', 'C', 'B', 'A' ],
        row_section: 3,
        seat: 18,
        F: [1,2],
        E: [0,1,2,3],
        D: [3,4,5,6,7],
        C: [2],
        B: [3],
        A: [4 ],
        price: [ 55.000, 60.000, 75.000, 75.000, 60.000, 55.000],
        date: 31,
        img: 'img/latmat7.jpg',
        video: 'video/LẬT MẶT 7- MỘT ĐIỀU ƯỚC - OFFICIAL TRAILER - Khởi chiếu 26.04.2024.mp4.crdownload',
        background:'img/latmat7.jpg',
        // backgroundticket:'img/latmat7.jpg'

        
    },
]


let addSeats = (arr) => {
    // console.log(arr)
    arr.forEach((el , i) => {
        const{series, row_section, seat, price, A, B, C, D, E, F } =el;

        //Create Row
        for (let index = 0; index < series.length; index++) {
            // console.log(series[index]);
            let row = document.createElement('div');
            row.className ='row';

            let booked_seats = [];
            booked_seats = [...eval(series[index])];
            console.log(booked_seats);
            // Create Seats
        for (let seats = 0; seats < seat; seats++) {
            if (seats === 0) {
                let span = document.createElement('span');
                span.innerText = series[index];
                row.appendChild(span);
            }
            let li = document.createElement('li');
            let filter = booked_seats.filter(el =>{
                return el === seats;
            })
            // console.log(filter);

            if (filter.length > 0) {
                li.className = "seat booked";

            }else{
                li.className = "seat";
            }

            li.id = series[index]+seats;
            li.setAttribute('book', seats);
            li.setAttribute('sr', series[index]);
            li.innerText = price[index];

            li.onclick = () =>{
                if (li.className === 'seat booked') {
                    li.classList.remove('selected');
                } else {
                    li.classList.toggle('selected');

                }
                let len = Array.from(document.getElementsByClassName('selected')).length;
                if (len > 0) {
                    document.getElementById('book_ticket').style.display = 'unset';
                }else{
                    document.getElementById('book_ticket').style.display = 'none';
                }

            }

            row.appendChild(li);
            if (seats === seat-1) {
                let span = document.createElement('span');
                span.innerText = series[index];
                row.appendChild(span);
            }
        }
        document.getElementById('chair').appendChild(row);
        }


    })
}

let data = pvr.filter(obj => obj.date == main_date && obj.movie  == url_segment[1]);
// console.log(data);

document.getElementById('title').innerText = data[0].title;
document.getElementById('time').innerText = data[0].time;
document.getElementById('MPA').innerText = data[0].MPA;
document.getElementById('introduce1').innerText = data[0].Introduce1;
document.getElementById('introduce2').innerText = data[0].Introduce2;
document.getElementById('introduce3').innerText = data[0].Introduce3;
document.getElementById('introduce4').innerText = data[0].Introduce4;
document.getElementById('introduce5').innerText = data[0].Introduce5;
document.getElementById('introduce6').innerText = data[0].Introduce6;
document.getElementById('poster').src = data[0].img;
document.getElementById('video').src = data[0].video;
var styleElem = document.head.appendChild(document.createElement("style"));

styleElem.innerHTML = `.book .right:before{background: url(${data[0].background})no-repeat center -30px/cover}`;

// styleElem.innerHTML = `.book .right .ticket .tic .tic_details{
//     background: url(${data[0].backgroundticket})no-repeat center -35px /cover;
// }`;


addSeats(data)

let offDate = ()=>{
    Array.from(document.getElementsByClassName('date_point')).forEach(el =>{
        el.classList.remove('h6_active')
    })
}

Array.from(document.getElementsByClassName('date_point')).forEach(el =>{
    el.addEventListener('click', ()=>{
        if (el.innerText > date.getDate()-1) {
            offDate();
            el.classList.add('h6_active');
            main_date = +el.innerText;
            document.getElementById('chair').innerHTML = '';
            let data = pvr.filter(obj => obj.date == main_date && obj.movie  == url_segment[1]);
// console.log(data);
            addSeats(data)
        }
    })
})

document.getElementById('book_ticket').addEventListener('click',() =>{
    Array.from(document.getElementsByClassName('selected')).forEach(el =>{
        let seat_no = el.getAttribute('book');
        let seat_sr = el.getAttribute('sr');
        let seat_price= el.innerText;


        let obj = {
            movie: url_segment[1],
            date : main_date,
            
        }

        let getData = pvr.map((obj)=>{
            if (
                obj.movie === url_segment[1] && obj.date === main_date
            ) {
                obj[seat_sr].push(+seat_no);
            }
            return obj;
        });

        // console.log(getData);

        document.getElementById('chair').innerHTML = '';
        let data = getData.filter(obj=> obj.date === main_date && obj.movie === url_segment[1]);
        addSeats(data);

        document.getElementById('screen').style.display = 'none';
        document.getElementById('chair').style.display = 'none';
        document.getElementById('det').style.display = 'none';
        document.getElementById('book_ticket').style.display = 'none';
        document.getElementById('back_ticket').style.display = 'unset';
        document.getElementById('ticket').style.display = 'block';

        let tic = document.createElement('div');
        tic.className ='tic';
        tic.innerHTML =
        ` <div class="barcode">
        <div class="card">
            <h6>HÀNG ${seat_sr.toLocaleUpperCase()}</h6>
            <h6> ${main_date} Tháng 5 2023</h6>
        </div>
        <div class="card">
            <h6>GHẾ ${seat_no}</h6>
            <h6>14:00</h6>
        </div>
        <div class="seat_cr">
                <h4>Giá vé: ${seat_price}.000 Đ</h4>
            </div>

        <svg id="${seat_sr}${seat_no}barcode"></svg>
        <h5>Aeon Mall Hà Đông</h5>
    </div>
    <div class="tic_details"  style=" background: url(${data[0].background})no-repeat center -35px /cover">
        <div class="type">2D</div>
        <h5 class="pvr"><span>Aeon Mall</span>Hà Đông</h5>
        <h1>${url_segment[1]}</h1>
        <div class="seat_det">
            <div class="seat_cr">
                <h5>Hàng</h5>
                <h5>${seat_sr.toLocaleUpperCase()}</h5>
            </div>
            <div class="seat_cr">
                <h5>Ghế</h5>
                <h5>${seat_no}</h5>
            </div>
            <div class="seat_cr">
                <h5>Ngày</h5>
                <h5>${main_date}<sub>Tháng 5</sub></h5>
            </div>
            <div class="seat_cr">
                <h5>Thời gian</h5>
                <h5>14:00<sub>AM</h5>
            </div>
            <div class="seat_cr">
                <h5>Giá vé</h5>
                <h5>${seat_price}.000 Đ</h5>
            </div>
        </div>
    </div>`
      document.getElementById('ticket').appendChild(tic);

      JsBarcode(`#${seat_sr}${seat_no}barcode`, 
      `${seat_sr.toLocaleUpperCase()}${seat_no}NDN2024`);

    })
})

document.getElementById('back_ticket').addEventListener('click',()=>{
    document.getElementById('screen').style.display = 'inline-block';
        document.getElementById('chair').style.display = 'block';
        document.getElementById('det').style.display = 'flex';
        document.getElementById('book_ticket').style.display = 'unset';
        document.getElementById('back_ticket').style.display = 'none';
        document.getElementById('ticket').style.display = 'none';
        // window.location.reload();

})


