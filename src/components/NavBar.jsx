// import React from 'react'

function LeftNavBarButton(props) {
    return (
        <div className="hover:bg-gray-50 hover:font-semibold p-5 w-full h-full flex justify-center items-center border-[1px] border-white border-r-gray-200">
            <h3 className='font-mono tracking-widest'>{props.text}</h3>
        </div>
    );
}

function CenterNavBarButton(props) {
    return (
        <div className="hover:bg-gray-50 hover:font-semibold p-5 w-full h-full flex justify-center items-center border-[1px] border-white border-x-gray-200">
            <h3 className='font-mono tracking-widest'>{props.text}</h3>
        </div>
    );
}

function RightNavBarButton(props) {
    return (
        <div className="hover:bg-gray-50 hover:font-semibold p-5 w-full h-full flex justify-center items-center border-[1px] border-white border-l-gray-200">
            <h3 className='font-mono tracking-widest'>{props.text}</h3>
        </div>
    );
}

function NavBar() {
    return (
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-b from-50% from-white/100 to-95% to-white/0 ">
            <div className="mt-5 mb-28 flex flex-row">
                <LeftNavBarButton text="home" />
                <CenterNavBarButton text="about" />
                <CenterNavBarButton text="projects" />
                <CenterNavBarButton text="gallery" />
                <RightNavBarButton text="contact" />
            </div>
        </div>
    );
  }
  
  export default NavBar;