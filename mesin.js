
let dataMentah = [
  {
    judul: 'Mengenal 8 Manfaat Vitamin B Kompleks berdasarkan Jenisnya',
    paragraps: `Salah satu tips makan sehat adalah mengonsumsi sayur dan buah yang kaya akan vitamin, seperti vitamin B kompleks. Terdapat 8 jenis vitamin B kompleks yang masing-masing memiliki manfaat bagi tubuh. Lalu, Apa saja manfaat vitamin B kompleks ini?
    Salah satu manfaat vitamin B kompleks yaitu membantu menjaga kesehatan dan fungsi organ tubuh, seperti menjaga sistem pencernaan serta membantu perkembangan sel. Selain itu, terdapat manfaat vitamin B kompleks lainnya yang bisa anda dapatkan dari mengonsumsi makanan dengan kandungan nutrisi tersebut secara optimal. Simak selengkapnya di sini.
    
    Artikel ini dibuat dan diterbitkan oleh Siloam Hospitals, baca selengkapnya di: *https://www.siloamhospitals.com/informasi-siloam/artikel/manfaat-vitamin-b-kompleks*
    
    Dapatkan informasi atau layanan kesehatan terkini Siloam Hospitals di:
    *Instagram*: https://instagram.com/siloamhospitals/
    *Contact Center*: (021)1-500-181
    *Siloam-At-Home*: https://wa.me/628111950181
    
    Download aplikasi MySiloam untuk kemudahan pelayanan kesehatan Anda:
    *IOS*: https://apple.co/3PYwuZK
    *Android*: https://bit.ly/SiloamPS`
  },
  {
    judul: 'harga cabai',
    paragraps: 'Lorem ipsum mobil dolor sit amet consectetur adipisicing nyata elit. Accusamus inventore, molestiae'
  },
  {
    judul: 'ninja di dunia nyata',
    paragraps: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus inventore, molestiae'
  },
  {
    judul: 'mobil balap',
    paragraps: 'Lorem ipsum dolor mobil kecap sit amet consectetur adipisicing elit. Accusamus inventore, molestiae'
  },
]

let datas = [...dataMentah].sort(()=> Math.random() - .5) // mengacak array
let elemen = ''
datas.map(data => {
  elemen += `
    <div class="w-[49%] bg-green-200 rounded-md max-h-20 leading-4 p-2">
      <h2 class="mb-2 font-bold">${data.judul}</h2>
      <p>${data.paragraps}</p>
    </div>
  `
}).join('')
$('.bagian-artikel').innerHTML = elemen

// ========================================================================================
// ---------------------------------bagian mesin pencari-----------------------------------
// ========================================================================================

// 1. LOOPING SEMUA OBJEK DATA
const artikelGabung = []
for(let i = 0; i< dataMentah.length; i++){
  // 2. GABUNGKAN JUDUL DAN PARAGARAF LALU SIMPAN KE DALAM ARRAY BARU
  artikelGabung.push(dataMentah[i].judul + ' ' + dataMentah[i].paragraps + ` ${i}`)
}
// 4. UBAH ISI ARRAY artikelGabung JADI ARRAY PERKATA
const artikelGabungArray = artikelGabung.map(ag => ag.split(' '))
// 5. HITUNG JUMLAH VEKTOR (jumlah kata di kolom pencarian)
$('#vektor').addEventListener('input', ()=> { //ketika tag iput di ketikan
  const vektor = $('#vektor').value.split(' ')
  const resultCari = []; 
  for(let i = 0; i< vektor.length; i++){ 
    // LOOPING ARRAY YANG TERDAPAT DI ARRAY artikelGabungArray  
    artikelGabungArray.forEach( aga => { 
      // 6. APAKAH vektor INDEX KE I ADA DI ARRAYNYA ARRAY artikelGabungArray?
      if(aga.includes(vektor[i])){
        // JIKA ADA, HITUNG KATA TERSEBUT 
        let jumlahV = aga.filter(a => a === vektor[i]).length
        // 7. MASUKAN KEYWORD, JUMLAH KATA VEKTOR DAN INDEX YANG TERDAPAT DI ARAYNYA artikelGabungArray kedalam variable resultCari          
        resultCari.push(new artikelParameter(vektor[i], jumlahV, aga[aga.length - 1]))
      } 
    })
  }
  console.log(resultCari)
})

class artikelParameter {
  constructor(kata, jumlahV, index){
    this.kata = kata
    this.jumlahV = jumlahV
    this.index = index
  }
}

function $(ell){
  return document.querySelector(ell)
}