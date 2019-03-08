"use strict";

const Factory = use("Factory");

class ProductSeeder {
  async run() {
    await Factory.model("App/Models/Product").createMany(8, [
      {
        name: "Xiaomi Pocophone F1",
        image:
          "https://ecs7.tokopedia.net/img/cache/700/catalog/2018/9/5/28533354/28533354_13c5d3f8-ebe9-4a5f-ad16-737cab0160c9.jpg",
        price: 410,
        rating: 4,
        desc:
          "Poco, the new sub-brand of Xiaomi just launched its latest smartphone, the Poco F1 in the Indian market on August 22, 2018, at a launch event in Delhi. The device comes with a Snapdragon 845 SoC with 6GB RAM and 64GB internal storage."
      },
      {
        name: "Drone SG - 700 Satellite",
        image:
          "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/08/06/goods_img_big-v1/20180806113411_98612.jpg",
        price: 145,
        rating: 4,
        desc:
          "The drone can be folded into a small shape, only 17 x 14.5 x 6cm, easy to carry. It has LED light, the night flight was realized. In addition, equipped with 6-axis gyroscope, there is a gyroscope calibration function. It also has a lot of functions, such as up / down, forward / backward, turn left / right, hover, headless mode, 360-degree roll and so on. The WiFi camera allows you to enjoy the aerial view on your phone and WiFi control. "
      },
      {
        name: "Samsung Galaxy Note8",
        image:
          "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//78/MTA-1405210/samsung_samsung-galaxy-note-8-smartphone---black--64gb-6gb-_full03.jpg",
        price: 660,
        rating: 5,
        desc:
          "Inovasi dari desain Samsung Galaxy Note8 menampilkan tampilan Infiniti 6.3 inci, yang terbesar yang pernah ada untuk Galaxy Note. Hal tersebut memberikan Anda layar untuk tampilan yang lebih besar dan lebih banyak ruang. Tentunya menggunakan Pen S dengan nyaman di tangan Anda karena kurva simetris dan aspek 18,5: 9 bersatu untuk dimensi yang sempit. Resolusi default adalah Full HD + dan dapat diubah menjadi Quad HD + (WQHD +) di Settings."
      },
      {
        name: "Macbook Air 11",
        image:
          "https://ecs7.tokopedia.net/img/cache/700/catalog/2017/7/21/20723472/20723472_f3c1c39a-b480-4430-9f91-fd7baaeaf920.png",
        price: 1560,
        rating: 3,
        desc:
          "MD711 merupakan laptop keluaran Apple yang memiliki layar 11 inci dengan berat yang tidak lebih dari 1.1 kg. Bobotnya yang ringan serta ukurannya yang kecil membuat laptop ini mampu untuk mendukung produktivitas penggunanya yang memiliki mobilitas tinggi. Laptop ini juga sudah dilengkapi dengan prosesor Intel Core i5 dengan RAM sebesar 4 GB yang membuat laptop ini mampu untuk melakukan multitasking tanpa hambatan tertentu."
      },
      {
        name: "Macbook Pro 13 MLL42",
        image:
          "https://imagerouter.tokopedia.com/img/700/catalog/2017/7/14/20723472/20723472_f51cd108-8665-41a7-a801-5bd7862e4a46.png",
        price: 1780,
        rating: 4,
        desc:
          "Macbook Pro berseri MLL42 merupakan laptop keluaran apple berlayar 13 inci dengan bawaan prosesor Intel Core i5 dan RAM sebesar 8 GB. Apple membekali laptop ini dengan storage sebesar 256 GB yang cukup untuk menyimpan dokumen-dokumen pekerjaan penting maupun file-file pribadi. Untuk urusan display, Apple memang tidak pernah gagal. Kali ini ia menyematkan kartu grafis Intel Iris Graphics 540 dengan tipe layar LED beresolusi layar maksimal 2560 x 1600 yang membuat laptop ini mampu menampilkan gambar sesuai dengan warna aslinya. Tidak lupa, laptop ini juga disemati retina display yang menjadi andalan Apple. Dengan spesifikasi ram, prosesor, dan fitur menarik lainnya, laptop ini menjadi laptop yang mumpuni karena multifungsi, mulai dari keperluan sehari-hari hingga gaming dan pengeditan video."
      },
      {
        name: "Apple iPhone X",
        image:
          "https://imagerouter.tokopedia.com/img/700/catalog/2017/9/28/15524491/15524491_b737e4a4-a340-4c9b-b076-56804a157dce.png",
        price: 1100,
        rating: 3,
        desc:
          "iPhone X hadir dengan tampilan glass edge-to-edge yang menimbulkan komentar netizen tentang daya tahan smartphone ini terhadap bantingan. Pihak Apple kemudian memberikan penjelasan bahwa glass yang digunakan pada iPhone X merupakan bahan yang paling kuat serta tidak mudah pecah. iPhone X hadir dengan display OLED tanpa bezel itu benar adanya. Layar smartphone ini dibekali oleh layar OLED Super Retina HD yang memiliki ukuran 5.8 inchi dengan resolusi 1125 x 2436 pixel dengan kerapatan pixel hingga 458 ppi. OLED ini dapat menghemat penggunaan baterai dan respon layar sentuh yang lebih cepat dibandingkan layar LCD dan LED yang digunakan oleh iPhone sebelumnya sehingga layar iPhone X dapat mengeluarkan warna yang lebih jernih dan nyata."
      },
      {
        name: "DJI Spark Fly More Combo",
        image:
          "https://imagerouter.tokopedia.com/img/700/catalog/2017/11/16/17027990/17027990_12656dd6-cea5-4ec1-890d-564b557ff23f.png",
        price: 750,
        rating: 5,
        desc:
          "Meskipun tangguh dan gesit di udara, drone bisa menjadi berat dan tidak praktis ketika sedang tidak digunakan. Namun tidak dengan DJI Spark, yang mana dirancang untuk dapat dibawa dengan mudah kemanapun. Quadcopter kecil ini sudah terintegrasi dengan motor stabilizer untuk mengambil gambar 12MP, video 1080p Full HD, dan bahkan selfie udara. Ukurang yang kecil, kecepatan maksimal 31mph dan waktu terbang hingga 16 menit akan memanjakan pengguna, mulai dari penggila FPV hingga Anda yang sekedar ingin mempunyai hasil gambar yang tidak bisa diambil dengan kamera biasa. Navigasi DJI Spark menggunakan fitur GPS dan juga vision-based untuk penggunaan outdoor ataupun indoor, flight mode yang beragam, dan 3D obstacle-detection system."
      },
      {
        name: "VGA GTX1080 -PALIT GTX 1080 DUAL OC 8GB",
        image:
          "https://ecs7.tokopedia.net/img/cache/700/product-1/2018/7/7/13152000/13152000_be00e920-9586-46f1-af8e-5320ca367d4c_1080_720.jpg",
        price: 815,
        rating: 4,
        desc:
          "Chip GPU pada GeForce GTX 1080 memiliki 2560 CUDA Cores dan beroperasi pada base clock 1607 MHz dan boost clock 1733 MHz. Chip GPU terhubung dengan memori GDDR5X melalui memory bus 256-bit dengan kapasitas 8192 MB pada kecepatan 10 GHz (efektif). Menariknya, GeForce GTX 1080 memiliki nilai graphics card power hanya sebesar 180 Watt dan dapat beroperasi normal dengan power supply 500 Watt. Suplai daya listrik didapatkan melalui satu konektor daya PCIe 8-pin. GeForce GTX 1080 juga hadir dengan konektor display HDMI 2.0b, Display Port 1.4, dan DL-DVI dengan dukungan resolusi hingga 7680×4320 piksel dengan tingkat refresh rate sebesar 60 Hz."
      }
    ]);
  }
}

module.exports = ProductSeeder;
