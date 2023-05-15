import icons from "./icons"

const { MdOutlineLibraryMusic, AiTwotonePieChart, TbChartArcs, MdOutlineFeed, BsDisc, BiPieChart } = icons
export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá Nhân',
        icons: <MdOutlineLibraryMusic size={22}/>
    },
    {
        path: '',
        text: 'Khám phá',
        end: 'true',
        icons: <BsDisc size={22}/>
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <BiPieChart size={22}/>
    },
    // {
    //     path: 'radio',
    //     text: 'Radio',
    //     icons: <TbChartArcs size={22}/>
    // },
    {
        path: 'follow',
        text: 'Theo dõi',
        icons: <MdOutlineFeed size={22}/>
    }
]