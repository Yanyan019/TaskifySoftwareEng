import React from 'react';
import './sidebar.css';

const Sidebar = () => {    
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Taskify</h1>
      </div>
      <ul className="sidebar-menu">
        {/* Sidebar menu items */}
        <li className="sidebar-menu-item">
          <a href="search.js">
            {/* Icon and label for Search */}
            <span className="text-sm font-medium">Search</span>
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a href="overview.js">
            {/* Icon and label for Overview */}
            <svg width="24px" height="24px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M352.329143 79.286857c35.474286 0 64.146286 28.525714 64.146286 63.853714v190.902858a64 64 0 0 1-64.146286 63.853714H180.955429a63.926857 63.926857 0 0 1-64.073143-63.853714v-190.902858c0-35.254857 28.672-63.853714 64.073143-63.853714h171.373714z m0 510.244572c35.474286 0 64.146286 28.525714 64.146286 63.853714v190.902857a64 64 0 0 1-64.146286 63.853714H180.955429a63.926857 63.926857 0 0 1-64.073143-63.853714v-190.902857c0-35.328 28.672-63.853714 64.073143-63.853714h171.373714z m490.715428-510.244572c35.401143 0 64.073143 28.525714 64.073143 63.853714v190.902858a64 64 0 0 1-64.073143 63.853714H671.670857a63.926857 63.926857 0 0 1-64.146286-63.853714v-190.902858c0-35.254857 28.745143-63.853714 64.146286-63.853714h171.373714z m-669.988571 379.611429h187.172571c64.512 0 116.736-51.931429 116.736-116.077715v-208.457142A116.297143 116.297143 0 0 0 360.228571 18.285714H173.129143C108.617143 18.285714 56.32 70.217143 56.32 134.436571v208.384a116.297143 116.297143 0 0 0 116.736 116.077715z m0 510.244571h187.172571c64.512 0 116.736-51.931429 116.736-116.150857V644.608a116.297143 116.297143 0 0 0-116.736-116.077714H173.129143c-64.512 0-116.736 51.931429-116.736 116.077714v208.457143a116.297143 116.297143 0 0 0 116.736 116.077714z m490.788571-510.244571h187.026286c64.512 0 116.736-51.931429 116.736-116.077715v-208.457142A116.297143 116.297143 0 0 0 850.870857 18.285714H663.771429C599.259429 18.285714 547.108571 70.217143 547.108571 134.436571v208.384a116.297143 116.297143 0 0 0 116.736 116.077715z m178.980572 448.877714H663.698286c-38.619429 0-55.296-16.091429-55.296-54.784V644.608c0-38.546286 16.749714-55.369143 55.369143-55.369143h187.099428c38.765714 0 56.173714 16.749714 56.173714 55.296V853.138286c0 12.8 13.677714 27.501714 31.524572 27.501714s29.037714-14.701714 29.037714-27.501714V644.534857a116.297143 116.297143 0 0 0-116.736-116.004571H663.771429c-64.512 0-116.736 51.931429-116.736 116.077714v208.457143a116.297143 116.297143 0 0 0 116.662857 116.077714H850.285714c13.458286 0 30.72-10.971429 30.72-30.793143a30.72 30.72 0 0 0-30.134857-30.573714h-7.972571z" fill="#000000"></path></g></svg>
            <span className="text-sm font-medium">Overview</span>
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a href="mytask.js">
            {/* Icon and label for My Task */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 4a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2M9.354 3c.705-.622 1.632-1 2.646-1s1.94.378 2.646 1H18a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.126 5H6v15h12V5h-2.126c.082.32.126.655.126 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6c0-.345.044-.68.126-1M8 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"/></g></svg>
            <span className="text-sm font-medium">My Task</span>
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a href="theme.js">
            {/* Icon and label for Theme */}
            <svg width="30px" height="30px" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M43.236 35.665C42.786 39.407 44.612 41.425 46.656 45.952C48.611 50.233 44.656 53.127 44.256 53.409C44.2418 53.4158 44.2287 53.4245 44.217 53.435C40.7494 55.2786 36.8812 56.2403 32.954 56.235C26.5872 56.2348 20.4812 53.7055 15.9791 49.2036C11.477 44.7017 8.94754 38.5958 8.94701 32.229C8.94939 25.8649 11.4794 19.7622 15.9807 15.2632C20.4819 10.7642 26.5858 8.23724 32.95 8.23804C37.2485 8.23682 41.4685 9.3901 45.1689 11.5774C48.8694 13.7646 51.9145 16.9056 53.986 20.672V20.681C56.84 30.303 43.673 31.923 43.236 35.665Z" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M53.986 20.672V20.681C56.84 30.299 43.673 31.919 43.236 35.661C42.799 39.403 44.612 41.421 46.656 45.948C48.611 50.229 44.656 53.122 44.256 53.405C44.2418 53.4117 44.2287 53.4205 44.217 53.431" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M32.944 26.4841C35.4486 26.4841 37.479 24.4537 37.479 21.9491C37.479 19.4445 35.4486 17.4141 32.944 17.4141C30.4394 17.4141 28.409 19.4445 28.409 21.9491C28.409 24.4537 30.4394 26.4841 32.944 26.4841Z" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22.657 34.885C24.1206 34.885 25.307 33.6985 25.307 32.235C25.307 30.7714 24.1206 29.585 22.657 29.585C21.1934 29.585 20.007 30.7714 20.007 32.235C20.007 33.6985 21.1934 34.885 22.657 34.885Z" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M26.428 44.065C27.2802 44.065 27.971 43.3742 27.971 42.522C27.971 41.6698 27.2802 40.979 26.428 40.979C25.5758 40.979 24.885 41.6698 24.885 42.522C24.885 43.3742 25.5758 44.065 26.428 44.065Z" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <span className="text-sm font-medium">Theme</span>
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a href="calendar.js">
            {/* Icon and label for Calendar */}
            <svg width="24px" height="24px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> </g></svg>
            <span className="text-sm font-medium">Calendar</span>
          </a>
        </li>
        <li className="sidebar-menu-item">
          <a href="index.html">
            {/* Icon and label for Logout */}
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                            <path d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
            <span className="text-sm font-medium">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};


export default Sidebar;
