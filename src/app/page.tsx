import Image from "next/image";
import styles from "./page.module.css";
import { getDictionary } from "../../get-dictionary";
import { i18n,Locale } from "../../i18n-config";
import { log } from "console";
import AudioComponent from "./components/AudioComponent";

    //const { lang } = await props.params;
    const dictionary = await getDictionary("ru" as Locale);

const t = (str:string):string => {
  return str.replace("{","<span>")
    .replaceAll("}","</span>")
    .replaceAll("[","<b>")
    .replaceAll("]","</b>")
    .replaceAll("\n","<br />")
}

const Video = ({src}:{src:string}) => {
  return (
    <video width="241" height="429" preload="yes" controls={true} controlsList="play"  loop className="rounded-xl">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default function Home() {

  const handlePlay = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e);
    const audioEl = e.currentTarget.querySelector('audio');
    if (audioEl) {
      audioEl.play();
    }
  }

  return (
    <main>
      <div className="top-container marg">
        <div className="logo">
          <div>
            <Image alt="Studio24" src="/images/Logo.svg" width={158} height={24} />
          </div>
          <div>
            {dictionary.main[1]}
          </div>
        </div>
        <p className="pt-20 sm:pt-28 sm:text-xl font-semibold sm:font-normal text-center sm:text-left">
            {dictionary.main[2]}
        </p>
        <p className="largeText" 
          dangerouslySetInnerHTML={{ __html: t(dictionary.main[3]) }}
        />
        <p className="pt-5 text-md sm:text-lg text-center sm:text-left">
          {dictionary.main[4]}
        </p>
        <div className="flex flex-col sm:flex-row  pl-6 sm:pl-0  pt-6 sm:pt-[51px] gap-4 w-full max-w-2xl ">
          <div className="flex items-center gap-2 text-xs">
            <Image alt='' src="/images/face-wink.svg" width={28} height={28} />
            {dictionary.main[5]}
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Image alt='' src="/images/hearts.svg" width={28} height={28} />
            {dictionary.main[6]}
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Image alt='' src="/images/gift-02.svg" width={28} height={28} />
            {dictionary.main[7]}
          </div>
        </div>
        <button className="bg-green-500 rounded-full text-white text-xl font-semibold w-full sm:w-auto px-20 py-3 sm:py-6  mt-6 sm:mt-[55px] hover:bg-green-600 transition">
          {dictionary.main[8]}
        </button>
        <p className="mt-2 ml-6 text-center sm:text-left text-xs text-[#5F5663]">
          {dictionary.main[9]}
        </p>
      </div>
      <div className="page-cntr flex flex-col md:flex-row gap-5 justify-between mt-6 sm:mt-10 px-5 sm:px-20">
          <div className="flex align-top gap-3">
            <div><Image className="mt-1" alt='' src="/images/face-content.svg" width={30} height={30} /></div>
            <div>
              <div className="font-semibold sm:text-lg">{dictionary.main[10]}</div>
              <span className="text-sm">{dictionary.main[11]}</span>
            </div>
          </div>
          <div className="flex align-top gap-3">
            <div><Image className="mt-1" alt='' src="/images/music-note.svg" width={30} height={30} /></div>
            <div>
              <div className="font-semibold sm:text-lg">{dictionary.main[12]}</div>
              <span className="text-sm">{dictionary.main[13]}</span>
            </div>
          </div>
          <div className="flex align-top gap-3">
            <div><Image className="mt-1" alt='' src="/images/clock-check.svg" width={30} height={30} /></div>
            <div>
              <div className="font-semibold sm:text-lg">{dictionary.main[14]}</div>
              <span className="text-sm">{dictionary.main[15]}</span>
            </div>
          </div>
      </div>
      <div className="px-5 sm:px-20 mt-12 sm:mt-[140px] mb-9">
        <p dangerouslySetInnerHTML={{ __html: t(dictionary.main[16]) }} className="text-xl sm:text-2xl font-bold text-center uppercase subspancolor" />
        <p className="mt-2 text-center text-lg">
          {dictionary.main[17]}
        </p>
      </div>
      <div className="page-cntr">
      <div className="flex mx-5 sm:mx-20 mt-6 mb-9 overflow-x-auto gap-4">
        <Video src="/videos/IMG_6540.MOV" />
        <Video src="/videos/IMG_6536.MOV" />
        <Video src="/videos/IMG_6532.MOV" />
        <Video src="/videos/IMG_6535.MOV" />
        <Video src="/videos/IMG_6533.MOV" />
        <Video src="/videos/IMG_6538.MOV" />
        <Video src="/videos/IMG_6542.MOV" />
        <Video src="/videos/IMG_6543.MOV" />
        <Video src="/videos/IMG_6544.MOV" />
      </div>
      </div> 
      <p className="mt-12 sm:mt-24 px-5 text-xl sm:text-2xl font-bold text-center  uppercase">
        {dictionary.main[18]}
      </p>
      <p className="mt-2 mb-9 px-5 text-center sm:text-lg ">
        {dictionary.main[19]}
      </p>
      <div className="page-cntr px-5 sm:px-20 flex flex-wrap gap-[2%]">
        <div className="holiday-cntr rounded-xl cntr birthday flex-shrink-0">
          <div className="mb-2 text-lg font-bold">{dictionary.main[20]}</div>
          <div className="text-sm">{dictionary.main[21]}</div>
        </div>
        <div className="rounded-xl holiday-cntr cntr anniversary flex-shrink-0">
          <div className="mb-2 text-lg font-bold">{dictionary.main[22]}</div>
          <div className="text-sm">{dictionary.main[23]}</div>
        </div>
        <div className="rounded-xl holiday-cntr cntr anniversary2 flex-shrink-0">
          <div className="mb-2 text-lg font-bold">{dictionary.main[24]}</div>
          <div className="text-sm">{dictionary.main[25]}</div>
        </div>  
        <div className="rounded-xl holiday-cntr cntr wedding flex-shrink-0">
          <div className="mb-2 text-lg font-bold">{dictionary.main[26]}</div>
          <div className="text-sm">{dictionary.main[27]}</div>
        </div>  
        <div className="rounded-xl holiday-cntr cntr job flex-shrink-0">
          <div className="mb-2 text-lg font-bold">{dictionary.main[28]}</div>
          <div className="text-sm">{dictionary.main[29]}</div>
        </div>  
        <div className="rounded-xl holiday-cntr cntr party flex-shrink-0">
          <div className="mb-2 text-lg font-bold">{dictionary.main[30]}</div>
          <div className="text-sm">{dictionary.main[31]}</div>
        </div>  
        <div className="rounded-xl holiday-cntr cntr ghost flex-shrink-0">
          <div className="mb-2 text-lg font-bold">{dictionary.main[32]}</div>
          <div className="text-sm">{dictionary.main[33]}</div>
        </div>  
        <div className="rounded-xl holiday-cntr cntr guitar flex-shrink-0">
          <div className="mb-2 text-lg font-bold">{dictionary.main[34]}</div>
          <div className="text-sm">{dictionary.main[35]}</div>
        </div>  
        <div className="rounded-xl holiday-cntr cntr party2 flex-shrink-0">
          <div className="mb-2 text-lg font-bold">{dictionary.main[36]}</div>
          <div className="text-sm">{dictionary.main[37]}</div>
        </div>  
        <div className="rounded-xl holiday-cntr cntr gift flex-shrink-0">
          <div className="mb-2 text-lg font-bold">{dictionary.main[38]}</div>
          <div className="text-sm">{dictionary.main[39]}</div>
        </div>  
        <div className="rounded-xl holiday-cntr cntr sorry flex-shrink-0">
          <div className="mb-2 text-lg font-bold">{dictionary.main[40]}</div>
          <div className="text-sm">{dictionary.main[41]}</div>
        </div>  
        <div className="rounded-xl holiday-cntr cntr love flex-shrink-0">
          <div className="mb-2 text-lg font-bold">{dictionary.main[42]}</div>
          <div className="text-sm">{dictionary.main[43]}</div>
        </div>  
      </div>
      <div className="story-cntr">
        <div className="page-cntr">
        <p className="text-white text-xl sm:text-2xl mb-2 font-bold text-center uppercase">
          {dictionary.main[44]}
        </p>
        <p className="text-white sm:text-lg text-center">
          {dictionary.main[45]}
        </p>
        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-9">
          <div className="bgOne">
            <div className="mb-2 font-semibold uppercase text-lg text-white">
              {dictionary.main[46]}
              </div>
            <div className="font-medium text-sm text-white">
              {dictionary.main[47]}
             </div>
          </div>
          <div className="bgTwo">
            <div className="mb-2 font-semibold uppercase text-lg text-white">
              {dictionary.main[48]}
              </div>
            <div className="font-medium text-sm text-white">
              {dictionary.main[49]}
             </div>
          </div>
          <div className="bgThree">
            <div className="mb-2 font-semibold uppercase text-lg text-white">
              {dictionary.main[50]}
              </div>
            <div className="font-medium text-sm text-white">
              {dictionary.main[51]}
             </div>
          </div>
        </div>
        </div>
      </div>
      <p className="mx-5 text-xl sm:text-2xl font-bold text-center uppercase">
        {dictionary.main[124]}
      </p>
      <div className="mx-5">
        <Image alt='' src="/images/video-author.png" width={629} height={393} className="mx-auto mt-6 sm:mt-9 mb-14 sm:mb-24 rounded-xl" />
      </div>
      <div className="page-cntr">
      <div className="bg-[#FAFAFA] border border-violet-200 rounded-xl py-5 sm:py-7 px-4 sm:px-14 mb-12 sm:mb-24 mx-5 lg:mx-60">
        <p className="text-xl sm:text-2xl font-bold text-center  uppercase">
          {dictionary.main[52]}
        </p>
        <div className="flex mt-6 sm:mt-9 gap-4">
          <div className="bg-green-500 text-white text-2xl font-bold flex-shrink-0 w-9 sm:w-12 h-9 sm:h-12 rounded-3xl flex justify-center items-center">1</div>
          <div>
            <div className="font-semibold text-lg">{dictionary.main[53]}</div>
            <div className="mt-2 text-sm">{dictionary.main[54]}</div>
          </div>
        </div>
        <div className="flex mt-6 sm:mt-9 gap-4">
          <div className="bg-green-500 text-white text-2xl font-bold flex-shrink-0 w-9 sm:w-12 h-9 sm:h-12 rounded-3xl flex justify-center items-center">2</div>
          <div>
            <div className="font-semibold text-lg">{dictionary.main[55]}</div>
            <div className="mt-2 text-sm">{dictionary.main[56]}</div>
          </div>
        </div>
        <div className="flex mt-6 sm:mt-9 gap-4">
          <div className="bg-green-500 text-white text-2xl font-bold flex-shrink-0 w-9 sm:w-12 h-9 sm:h-12 rounded-3xl flex justify-center items-center">3</div>
          <div>
            <div className="font-semibold text-lg">{dictionary.main[57]}</div>
            <div className="mt-2 text-sm">{dictionary.main[58]}</div>
          </div>
        </div>
      </div>
      </div>  
      <p className="text-xl sm:text-2xl font-bold text-center uppercase">
        {dictionary.main[59]}
      </p>
      <p className="mt-2 mb-10 text-center text-lg ">
        {dictionary.main[60]}
      </p>
      <p className="px-5 mb-4 text-xl sm:text-2xl font-bold text-center">
        {dictionary.main[61]}
      </p>
      <div className="flex justify-center gap-9 mb-7 sm:mb-10 mx-5 sm:mx-28 pt-6 overflow-x-auto">
        <AudioComponent 
          src="/audio/wedding-anniversary.mp3"
          title={dictionary.main[62]}
          avatarClass="avatar-anniversary"  
        />
        <AudioComponent 
          src="/audio/birthday.mp3"
          title={dictionary.main[63]}
          avatarClass="avatar-birthday"  
        />
        <AudioComponent 
          src="/audio/fallinlove.mp3"
          title={dictionary.main[64]}
          avatarClass=""  
        />
      </div>
      <p className="px-5 mb-4 text-xl sm:text-2xl font-bold text-center">
        {dictionary.main[65]}
      </p>
      <div className="flex justify-center gap-9 mb-7 sm:mb-10 mx-5 sm:mx-28 pt-6 overflow-x-auto">
        <AudioComponent 
          src="/audio/birthday.mp3"
          title={dictionary.main[66]}
          avatarClass="avatar-anniversary"  
        />
        <AudioComponent 
          src="/audio/husband.mp3"
          title={dictionary.main[67]}
          avatarClass="avatar-husband"  
        />
        <AudioComponent 
          src="/audio/fallinlove.mp3"
          title={dictionary.main[68]}
          avatarClass=""  
        />
      </div>
      <p className="px-5 mb-4 text-xl sm:text-2xl font-bold text-center">
        {dictionary.main[69]}
      </p>
      <div className="flex justify-center gap-9 mb-7 sm:mb-10 mx-5 sm:mx-28 pt-6 overflow-x-auto">
        <AudioComponent 
          src="/audio/granny.mp3"
          title={dictionary.main[70]}
          avatarClass="avatar-granny"  
        />
        <AudioComponent 
          src="/audio/granny.mp3"
          title={dictionary.main[71]}
          avatarClass=""  
        />
        <AudioComponent 
          src="/audio/granny.mp3"
          title={dictionary.main[72]}
          avatarClass="avatar-woman"  
        />
      </div>

      <div className="create-cntr flex flex-row-reverse py-11 px-20">
        <div className="text-white lg:w-3/5">
          <p className="text-xl sm:text-2xl font-bold mb-5 uppercase">
            {dictionary.main[95]}
          </p>
          <p dangerouslySetInnerHTML={{ __html: t(dictionary.main[96]) }} className="sm:text-lg" />
        </div>
      </div>

      <p className="mx-5 text-xl sm:text-2xl font-bold text-center uppercase mb-2">
        {dictionary.main[97]}
      </p>
      <p className="mb-4 px-5 text-center text-sm sm:text-lg ">
        {dictionary.main[98]}
      </p>
      <div className="page-cntr reviews-cntr mb-20 px-5 lg:px-48 flex flex-wrap gap-2.5 justify-center">
        <Image alt='' src="/images/reviews/1.png" width={181} height={121} className="rounded-xl w-6/12 sm:w-auto" />
        <Image alt='' src="/images/reviews/1.png" width={181} height={121} className="rounded-xl w-5/12 sm:w-auto" />
        <Image alt='' src="/images/reviews/1.png" width={181} height={121} className="rounded-xl w-5/12 sm:w-auto" />
        <Image alt='' src="/images/reviews/1.png" width={181} height={121} className="rounded-xl w-6/12 sm:w-auto" />
        <Image alt='' src="/images/reviews/1.png" width={181} height={121} className="rounded-xl w-6/12 sm:w-auto" />
        <Image alt='' src="/images/reviews/1.png" width={181} height={121} className="rounded-xl w-5/12 sm:w-auto" />
        <Image alt='' src="/images/reviews/1.png" width={181} height={121} className="rounded-xl w-5/12 sm:w-auto" />
        <Image alt='' src="/images/reviews/1.png" width={181} height={121} className="rounded-xl w-6/12 sm:w-auto" />
        <Image alt='' src="/images/reviews/1.png" width={181} height={121} className="rounded-xl w-6/12 sm:w-auto" />
        <Image alt='' src="/images/reviews/1.png" width={181} height={121} className="rounded-xl w-5/12 sm:w-auto" />
      </div>

      <div className="page-cntr">
      <div className="garanty-cntr rounded-xl mx-5 lg:mx-60">
        <div className="rounded-xl px-7 py-5 bg-white ml-0 sm:ml-56 mt-40 sm:mt-0">
          <p className="text-xl sm:text-2xl font-bold">
            {dictionary.main[99]}
          </p>
          <p className="text-sm text-gray-500 mb-7">
            {dictionary.main[100]}
          </p>
          <p className="font-bold mb-4">
            {dictionary.main[101]}
          </p>
          <div>
            <div className="flex mb-4 gap-4">
              <div className="bg-violet-700 text-white font-semibold flex-shrink-0 w-7 h-7 rounded-3xl flex justify-center items-center">1</div>
              <div>
                <p dangerouslySetInnerHTML={{__html: t(dictionary.main[102]) }} />
              </div>
            </div>            
            <div className="flex mb-4 gap-4">
              <div className="bg-violet-700 text-white font-semibold flex-shrink-0 w-7 h-7 rounded-3xl flex justify-center items-center">2</div>
              <div>
                <p dangerouslySetInnerHTML={{__html: t(dictionary.main[103]) }} />
              </div>
            </div>            
            <div className="flex mb-4 gap-4">
              <div className="bg-violet-700 text-white font-semibold flex-shrink-0 w-7 h-7 rounded-3xl flex justify-center items-center">3</div>
              <div>
                <p dangerouslySetInnerHTML={{__html: t(dictionary.main[104]) }} />
              </div>
            </div>            
            <div className="flex mb-4 gap-4">
              <div className="bg-violet-700 text-white font-semibold flex-shrink-0 w-7 h-7 rounded-3xl flex justify-center items-center">4</div>
              <div>
                <p dangerouslySetInnerHTML={{__html: t(dictionary.main[105]) }} />
              </div>
            </div>            
          </div>
          <p dangerouslySetInnerHTML={{__html: t(dictionary.main[106]) }} />
        </div>
      </div>
      </div>

      <div className="numbers-cntr">
        <div className="page-cntr flex flex-col lg:flex-row justify-center gap-10 py-11 px-5 sm:px-20">
          <div>
            <div className="mb-3 text-4xl sm:text-7xl font-semibold text-white">
              {dictionary.main[107]}
            </div>
            <div className="text-white">
              {dictionary.main[108]}
            </div>
          </div>
          <div>
            <div className="mb-3 text-4xl sm:text-7xl font-semibold text-white">
              {dictionary.main[109]}
            </div>
            <div className="text-white">
              {dictionary.main[110]}
            </div>
          </div>
          <div>
            <div className="mb-3 text-4xl sm:text-7xl font-semibold text-white">
              {dictionary.main[111]}
            </div>
            <div className="text-white">
              {dictionary.main[112]}
            </div>
          </div>
          <div>
            <div className="mb-3 text-4xl sm:text-7xl font-semibold text-white">
              {dictionary.main[113]}
            </div>
            <div className="text-white">
              {dictionary.main[114]}
            </div>
          </div>
        </div>
      </div>

      <div className="page-cntr">
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-0 sm:gap-10 mx-5 sm:mx-20 mb-14 sm:mb-24 ">
          <div>
            <Image alt='' src="/images/img_player.png" width={519} height={480} className="w-[360px] h-[333px] sm:w-[519px] sm:h-[480px] max-w-0" />
          </div>
          <div>
              <p className="text-xl text-center sm:text-left sm:text-2xl font-bold mt-8 mb-2 uppercase">
                {dictionary.main[115]}
              </p>
              <p className="text-sm sm:text-lg text-center sm:text-left">
                {dictionary.main[116]}
              </p>
              <div className="flex gap-2.5 mt-6 items-center">
                <Image alt='' src="/images/check.svg" width={44} height={44} />
                <p className="text-sm sm:text-lg" dangerouslySetInnerHTML={{__html:t(dictionary.main[117])}} /> 
              </div>
              <div className="flex gap-2.5 mt-6 items-center">
                <Image alt='' src="/images/check.svg" width={44} height={44} />
                <p className="text-sm sm:text-lg" dangerouslySetInnerHTML={{__html:t(dictionary.main[118])}} /> 
              </div>
              <div className="flex gap-2.5 mt-6 items-center">
                <Image alt='' src="/images/check.svg" width={44} height={44} />
                <p className="text-sm sm:text-lg" dangerouslySetInnerHTML={{__html:t(dictionary.main[119])}} /> 
              </div>
              <button className="bg-green-500 rounded-full text-white text-xl font-semibold w-full sm:w-auto px-20 py-3 sm:py-6  mt-6 sm:mt-[55px] hover:bg-green-600 transition">
                {dictionary.main[8]}
              </button>

          </div>
        </div>
      </div>

    </main>
  );
}
