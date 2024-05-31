import {useState} from 'react'

function ProfileTabs() {
    const [activeTab, setActiveTab] = useState(0);

    return (
      <div className='mt-10 overflow-hidden rounded-lg shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]'>
        <div className='flex px-10 overflow-x-auto border-b'>
          <div
            className={`px-10 py-4 cursor-pointer ${activeTab === 0 ? 'border-b-2 border-primary' : ''}`}
            onClick={() => setActiveTab(0)}
          >
            Cтатистика
          </div>
          <div
            className={`px-10 py-4 cursor-pointer ${activeTab === 1 ? 'border-b-2 border-primary' : ''}`}
            onClick={() => setActiveTab(1)}
          >
            Компании
          </div>
          <div
            className={`px-10 py-4 cursor-pointer ${activeTab === 2 ? 'border-b-2 border-primary' : ''}`}
            onClick={() => setActiveTab(2)}
          >
            Транзакции
          </div>
        </div>
        <div className='p-10'>
          {activeTab === 0 && <div>Content of the first tab</div>}
          {activeTab === 1 && <div>Content of the second tab</div>}
          {activeTab === 2 && <div>Content of the third tab</div>}
        </div>
      </div>
    );
}


export default ProfileTabs