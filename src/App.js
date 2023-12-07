import React from 'react'
import Card from './Card/card';
import './App.css';
import Header from './Header/header';

function App() {
  const Videos = [
    {
      id: 1,
      title: "Example Video 1",
      thumbnailUrl: "https://www.youtube.com/embed/ieB_Eo-ecZc",
      likes: '1500',
      views: 25000,
      channelName: "RS Player",
      channelLogoUrl: "https://yt3.googleusercontent.com/RubmYbA1MHTZjucVSnKG55E3c0Mikif7JmqAbZAzTXNTQb6jKNSaMIkSLgP3223UIHva2iXZfQ=s176-c-k-c0x00ffffff-no-rj",
    },

    {
      id: 2,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/5DNOQartzLY",
      likes: 1200,
      views: 18000,
      channelName: "Antaryami Gaming",
      channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKbUotGO8xN1UeRLZe_sKEYPw4-DG7K69fKXM2TpVg=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 3,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/5DNOQartzLY",
      likes: 1200,
      views: 18000,
      channelName: "Lallantop",
      channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKYlWJM-okRIhp0paTrADyxVH0MPux1lk1cwsf_FkKY=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 4,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/uKX75dPcJ-o",
      likes: 1200,
      views: 18000,
      channelName: "Study IQ",
      channelLogoUrl: "https://yt3.googleusercontent.com/zQsMby_wTLLoqAj4nn8XWn1__Z9zswgGGL6UaEfNZrg7yuxX3VXn84g0-TZCSKKcpfUipVCj2g=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 5,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/TiqIzfAFJFY",
      likes: 1200,
      views: 18000,
      channelName: "Super Super",
      channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKa_4iWh0XtjQ1rlGR7fkiM5iXgibUJlX6z07zldzw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 6,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/qMMNkHjWs5U",
      likes: 1200,
      views: 18000,
      channelName: "Utkarsh",
      channelLogoUrl: "https://yt3.googleusercontent.com/QzQe_dE8MSym9s7FSgjQ6m9NYQZS-dkh8PNThZa56o4hP4YX7k9No9dp-NPk12H1hvcgPM_RVw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 7,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/voN-LFwJtPc",
      likes: 1200,
      views: 18000,
      channelName: "Anime ",
      channelLogoUrl: "https://yt3.googleusercontent.com/HUgAQfu3lxKOynhN3zhHUgciO1FQ_iSS_ysMjTC3CUVRhjjAHf7_zqJigDrlSCsCR4-b8FNsNw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 8,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/_sZTTbvvngI",
      likes: 1200,
      views: 18000,
      channelName: "Anime Explained",
      channelLogoUrl: "https://yt3.googleusercontent.com/e_WbE-mjARU7rbW_HgwS5RTslBQogScBevuyLwuc6cp-T8eEyTh7qwHIILJDxG3-LrIPP2KhEg=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 9,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/EoHwAvj28ow",
      likes: 1200,
      views: 18000,
      channelName: "Ever Exam",
      channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKafvJs-Xr-R823zC5EU9WslaQoEDNwrikBWh9FxMw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 10,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/fHp9U2hqwIo",
      likes: 1200,
      views: 18000,
      channelName: "TVF",
      channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKbGkPzC5VJDs9tm7Zqg5MSEGqqKwamJ8V9PFx2Pbg=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 11,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/fMS5CrJjvec",
      likes: 1200,
      views: 18000,
      channelName: "Law Firm",
      channelLogoUrl: "https://yt3.googleusercontent.com/WdmzNydaCUsWYNDFhxcIGtXO7YXwbGpO99L7SdG-_yuNfQ4OMmW0ve6Cn_tYB8ywBnMKYkGGYDQ=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 12,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/4oXuYOqXaTs",
      likes: 1200,
      views: 18000,
      channelName: "Crime Profiles",
      channelLogoUrl: "https://yt3.googleusercontent.com/GU1lcYL5281PtIxjFBk97Ewe-GAG8PmjdWOH4mC6NKZ7YyuHiEhz_JuZ63gbAxs1HOlCj_acu1k=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 13,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/soJRTycJk2U",
      likes: 1200,
      views: 18000,
      channelName: "BB Ki Vines",
      channelLogoUrl: "https://yt3.googleusercontent.com/l_ZIXrVEQcHTBTsmpt2CFiWJF9_0hwB3rngr1_lxozZ3Lz58Ij5TcDFOp2TYlioU2gI9RlyExw=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 14,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/DEv_ELO9M3Y",
      likes: 1600,
      views: 18000,
      channelName: "Zee News",
      channelLogoUrl: "https://yt3.googleusercontent.com/vZFILuFswtjUIU5oRCc79rxRdML5A_c-D_6AdvgAAd0hqSrJihyJFkT_CTSjYwSrHgiPAAozebY=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 15,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/h2gKcqx3TKs",
      likes: 1200,
      views: 18000,
      channelName: "UP Sangam Classes",
      channelLogoUrl: "https://yt3.googleusercontent.com/hNRoRdSMxP8luch1Fsv1ZVawX0E44yn4_FnkTUR0P_H1bZxbELXAJgxRsk3UjJD1JBJ0oLWw_g=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 16,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/bACaxG7-yo4",
      likes: 1200,
      views: 18000,
      channelName: "SSC Adda",
      channelLogoUrl: "https://yt3.googleusercontent.com/4-CQgMi54Qr_r0BU661rowJZsFC3ubYnBvrurqbgUpoFzAmEE2D0DRwBCq2QWjB4UamJXW7Dww=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 17,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/AFA_vFlQ0-o",
      likes: 1200,
      views: 18000,
      channelName: "Crazy GK Tricks",
      channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKapQ8i6qDermtaM_AG4DYiv1ZIl497RVAJPybOy6g=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 18,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/CJPwUx-RFPA",
      likes: 1200,
      views: 18000,
      channelName: "Testbook SSC",
      channelLogoUrl: "https://yt3.googleusercontent.com/m4mXxpt8D2wryqgYzk1M2UCUgQ5i_9y3kVQbaxmviMS1yGGJFgjQdzDCnIZVf3NDmZ7mudA3=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 19,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/skD7aRuJvqo",
      likes: 1200,
      views: 18000,
      channelName: "TRS Clips",
      channelLogoUrl: "https://yt3.googleusercontent.com/3mJq5rzNDUSVtYaLhzdnfBuf4OzARREeCdlP51BGHLXixv1LiImfl7QbnU7hE1XUI0aXIFDb-TA=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 20,
      title: "Example Video 2",
      thumbnailUrl: "https://www.youtube.com/embed/ilSFtEXOstg",
      likes: 1200,
      views: 18000,
      channelName: "Lofi Boy",
      channelLogoUrl: "https://yt3.googleusercontent.com/DJz63MhDn4KYDwJ4O5_jGK0Ke2Bc8rH7p0An6hJ07lbnDR0Rhg84bU3XhvOMI_pCsPuX8sgOyg=s176-c-k-c0x00ffffff-no-rj",
    },
  ];

  return (
    <div>
    <Header/>
    <div className='container'>
    {Videos.map(item => (<Card details={item}/>))}
    </div>
    </div>

  );
}
export default App;
