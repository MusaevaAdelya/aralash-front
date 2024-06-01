import React, {useState} from 'react'
import LineChart from './LineChart';
import Companies from './Companies';
import Transactions from './Transactions';
import Balance from './Balance';
import ApiKeyManager from "./ApiKeyManager";

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
          <div
            className={`px-10 py-4 cursor-pointer ${activeTab === 3 ? 'border-b-2 border-primary' : ''}`}
            onClick={() => setActiveTab(3)}
          >
            Пополнение
          </div>
            <div
                className={`px-10 py-4 cursor-pointer ${activeTab === 3 ? 'border-b-2 border-primary' : ''}`}
                onClick={() => setActiveTab(4)}
            >
                Получить ключ
            </div>
        </div>
        <div className='p-10'>
          {activeTab === 0 && <LineChart/>}
          {activeTab === 1 && <Companies/>}
          {activeTab === 2 && <Transactions/>}
          {activeTab === 3 && <Balance/>}
          {activeTab === 4 && <ApiKeyManager/>}
        </div>
      </div>
    );
}


export default ProfileTabs