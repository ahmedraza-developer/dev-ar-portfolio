import Image from 'next/image'
import Html5 from "media/blogs/html5.jpg"
import Link from 'next/link';
const page = () => {
  let card = [
    {
      links:"unveiling-the-power-of-html5/",
      img: Html5,
      title:"Unveiling the Power of HTML5",
    },
    {
      links:"#",
      img: Html5,
      title:"Unveiling the Power of HTML5",
    },
    {
      links:"#",
      img: Html5,
      title:"Unveiling the Power of HTML5",
    },
    {
      links:"#",
      img: Html5,
      title:"Unveiling the Power of HTML5",
    },
    {
      links:"#",
      img: Html5,
      title:"Unveiling the Power of HTML5",
    },
    {
      links:"#",
      img: Html5,
      title:"Unveiling the Power of HTML5",
    },
  ]
  return (
    <section>
      <div className='text-center bg-black text-white pt-[150px] pb-[100px]'>
        <div className="container">
          <h1 className="text-[60px] leading-tight font-extrabold"><u>Blogs</u></h1>
        </div>
      </div>
      <div className="py-[30px]">
        <div className="container">
          <div className="grid grid-cols-3 gap-x-5 gap-y-5">
            {
              card && card?.map((e, i) => (
                <div key={i} className="rounded-lg shadow-lg bg-white border-2 border-[#f6f6f6]">
                  <div className="p-3">
                    <Image src={e.img} alt="Icons" className="block m-auto" />
                    <h2 className="font-bold text-[22px] py-2">{e.title}</h2>
                    <Link href={e.links} className='text-xl leading-none font-semibold text-pink'><span><u>Read More</u></span></Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default page;