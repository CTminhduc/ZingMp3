import icons from "./icons"

const { MdOutlineLibraryMusic } = icons
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
        icons: <MdOutlineLibraryMusic size={22}/>
    },    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <MdOutlineLibraryMusic size={22}/>
    },    {
        path: 'follow',
        text: 'Theo dõi',
        icons: <MdOutlineLibraryMusic size={22}/>
    }
]