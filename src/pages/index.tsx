import Head from 'next/head';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})


const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sold.com Difference</title>
        <meta name="description" content="Supercharge your productivity with our app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-sans`}>
        <div className="bg-[#25282A] w-[375px] h-[935px] py-9 px-7 mx-auto max-w-5xl xl:flex xl:flex-wrap xl:gap-280">
          <h1 className="font-bold text-2xl text-white">
            Sold.com Difference
          </h1>
          <p className="text-sm mt-3.5 text-white w-[332px]  ">
            Unlike other lead sources and portals, we don’t focus on worthless metrics like impressions or even leads. SOLD.com shows you how many clients actually cross the finish line and buy or sell a home.   </p>
          <p className="text-sm mt-7 text-white  xl:p-0">
            After all, isn’t that the metric that matters most ? </p>
          <div className="bg-white rounded-lg w-[332px] h-[216px] mt-[46.6px] mr-[17px]  xl:m-0 md:ml-8  md:mb-5 md:w-auto ">
            <p className='text-black font-regular text-sm ml-5 pt-[17px]'>In your zips over the last 18 months, we’ve originated:</p>
            <div className='flex'>
              <div>
                <img src='/Icon-48 place holder.svg' className='mt-[20px] ml-[24px] xl:pl-4' />
                <p className='font-bold text-3xl mt-4 ml-6 '>$20M</p>
                <span className='text-xs ml-6'>in Sales</span>
              </div>
              <div>
                <img src='/Icon-48 place holder2.svg' className='mt-[20px] ml-[80px] sm:pl-4' />
                <p className='font-bold text-3xl mt-4 ml-20'>$500K</p>
                <span className=' text-xs ml-20'>in Comissions (est)</span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg w-[332px] h-[565px] mt-[26px] mr-[17px]">
            <p className=' text-black font-regular text-base ml-5 pt-5 '>Our referrals are routed to the top performing agents in our network. Rankings are based on numerous factors, including:</p>

            <ol className="text-black font-regular text-sm pt-3.5 ml-8" >
              <li className='pb-3'> <em className='text-[#E82418] not-italic font-bold '>+</em> Transaction statistics</li>
              <li className='pb-3'> <em className='text-[#E82418] not-italic font-bold '>+</em> Responsiveness</li>
              <li className='pb-3'> <em className='text-[#E82418] not-italic font-bold '>+</em> Customer Satisfaction</li>
              <li> <em className='text-[#E82418] not-italic font-bold '>+</em> Portal Updates</li>
            </ol>
            <div className="bg-[#F5F8FA] rounded-lg w-[305px] h-[259px] mt-[46.6px] ml-3.5">
              <div className='flex'>
                <p className='text-black font-bold text-lg ml-5 pt-5 w-[192px]'>Your average rank in the markets you serve is:</p>
                <p className='text-[#E82418] font-bold text-[34px] pl-7 pt-6 '>25↓</p>
              </div>
              <div className='flex'>
                <div>
                  <p className=' text-black font-regular text-sm ml-5 pt-[17px]'>Your ranking will directly affect the number of referrals you receive. Learn about our <em className='text-[#E82418] not-italic '>Guaranteed Display</em> program to help improve your ranking.</p>
                  <button className='text-white font-bold bg-[#F93822] rounded-lg w-[284px] h-[44px] mt-1 ml-3.5'>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex mx-auto max-w-5xl xl:flex xl:flex-wrap xl:gap-28'>
          <div className="bg-[#E82418] rounded w-[16px] h-[32px] mt-[200px] ml-7 pl-2"></div>
          <p className=' text-black font-bold text-base pl-2.5 pt-[200px] md:ml-8  md:mb-5 md:w-auto '>Since you joined our network, here’s what we’ve been up to in your zip codes:</p>
        </div>
        <div className="bg-white rounded-lg w-[345px] h-[494px] mt-9 ml-4 border-solid border-2  ">
          <img src='/icon-leads.svg' className='pt-[42px] pl-[41px]' />
          <h1 className='font-regular text-4xl pl-10 mt-4 '>Opportunity</h1>
          <div className='flex'>
            <p className='font-regular text-base pl-10 mt-12 opacity-100 '>SOLD.com <p>Leads</p></p>
            <p className='text-[#00A3E0] font-bold text-4xl pl-[85px] pt-14'>500</p>
        </div><div className='flex'>
        </div>
          <div className='flex'>
            <p className='font-regular text-base pl-10 mt-12 opacity-100'>Customers that we<p>told about you</p></p>
            <p className='text-[#00A3E0] font-bold text-2xl pl-[40px] pt-14'>100</p>
          </div>
          <div className='flex'>
            <div className="bg-[#00A3E0] rounded w-[55px] h-[4px] ml-10 mt-5  "></div>
            <p className="text-[#00A3E0] font-regular text-xs ml-36 mt-3" >(XX%)</p>
          </div>
          <div className='flex'>
            <p className='font-regular text-base pl-10 pt-7'>Appointments <p>set with you</p></p>
            <p className='text-[#00A3E0] font-bold text-2xl ml-[85px] pt-9'>30</p>
          </div>
        </div>
        <div className="bg-white rounded-lg w-[345px] h-[543px] ml-4 mt-8 border-solid border-2">
          <img src='/icon-happy-face.svg' className='pt-[42px] pl-[41px]' />
          <h1 className='font-regular text-4xl pl-10 mt-4'>Wins</h1>
          <div className='flex'>
            <p className='font-regular text-base pl-10 mt-12 opacity-100'>Your signed<p>agreements</p></p>
            <p className='text-[#84AE2B] font-bold text-4xl pl-[85px] pt-14'>15</p>
          </div>
          <div className='flex'>
            <p className='font-regular text-base pl-10 pt-11'>Your closings</p>
            <p className='text-[#84AE2B] font-bold text-2xl ml-[85px] pt-10'>10</p>
          </div>
          <div className="bg-[#F5F8FA] rounded-lg w-[345px] h-[234px] mt-[46.6px] pl-4">
            <div className='flex'>
              <p className='font-regular text-base pl-28 pt-11'>Your closed volume<p className='text-[#84AE2B] font-regular text-2xl'>$3,000,000 </p></p>
            </div>
            <div className='flex'>
              <p className='font-regular text-base pl-28 pt-11'>Your comission (est)<p className='text-[#84AE2B] font-regular text-2xl'>$500,00</p></p>
            </div>
          </div>
        </div>
        <div className="bg-green-00 shadow-2xl rounded-lg w-[345px] h-[543px] ml-4 mt-[103px]">
          <img src='/icon-sad-face.svg' className='pt-[42px] pl-[41px]' />
          <h1 className='font-regular text-4xl pl-10 mt-4'>Losses</h1>
          <div className='flex'>
            <p className='font-regular text-base pl-10 mt-12 opacity-100'>Appointments that signed with<p>another agent</p></p>
            <p className='text-[#F93822] font-bold text-4xl mr-[85px] pt-14'>15</p>
          </div>
          <div className='flex'>
            <p className='font-regular text-base pl-10 pt-11'>Lost closings</p>
            <p className='text-[#F93822] font-bold text-2xl ml-[85px] pt-10'>10</p>
          </div>
          <div className="bg-[#F5F8FA] rounded-lg w-[345px] h-[234px] mt-[46.6px] pl-4">
            <div className='flex'>
              <p className='font-regular text-base pl-28 pt-11'> Lost volume<p className='text-[#F93822] font-regular text-2xl'>$3,000,000</p></p>
            </div>
            <div className='flex'>
              <p className='font-regular text-base pl-28 pt-11'>Lost comission (est)<p className='text-[#F93822] font-regular text-2xl'>$500,00</p></p>
            </div>
          </div>
        </div>
        <div className='flex'>
          <p className='text-black font-bold text-xl ml-6 pt-[170px]'>Unsatisfied with these stats? <p>We can help you improve them.</p></p>
        </div>
        <div>
          <button className='text-white font-bold bg-[#F93822] rounded w-[166px] h-[42px] ml-[105px] mt-6 mb-16'>Schedule a call</button>
          </div>
      </main>
    </>
  );
};

export default Home;