
import React from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import CircularProgress from '../components/CircularProgress';
import StatCard from '../components/StatCard';
import ProgressBar from '../components/ProgressBar';
import LineChart from '../components/LineChart';
import ColorBarChart from '../components/ColorBarChart';
import Calendar from '../components/Calendar';
import ActivityLog from '../components/ActivityLog';
import ProgressTimeline from '../components/ProgressTimeline';

const Index = () => {
  const progressBarData = [
    { label: 'กุ้งผัดซอสมะขาม', value: 85, maxValue: 100, color: '#ec4899' },
    { label: 'กุ้งทะเลเผา', value: 65, maxValue: 100, color: '#06b6d4' },
    { label: 'จ๊อปูไส้ทะลัก', value: 90, maxValue: 100, color: '#10b981' },
    { label: 'เนื้อย่างนมสด', value: 45, maxValue: 100, color: '#f59e0b' },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1">
        <TopBar />
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
            <CircularProgress
              value={283}
              maxValue={1000}
              color="#06b6d4"
              title="จำนวนคำสั่งซื้อหน้าร้าน"
              subtitle=" วันนี้"
            />
            
            <CircularProgress
              value={153}
              maxValue={1000}
              color="#ec4899"
              title="จำนวนคำสั่งซื้อเดริเวอร์รี่"
              subtitle="วันนี้"
            />
            
            <CircularProgress
              value={436}
              maxValue={2000}
              color="#10b981"
              title="รวมยอดสั่งซื้อ"
              subtitle="วันนี้"
            />
            
            <StatCard
              title="เพิ่มขึ้นจากเมื่อวาน"
              subtitle="รวม"
              percentage="10%"
              description=""
              gradient="from-purple-600/30 to-pink-600/20"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <LineChart />
            <ColorBarChart />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <ProgressBar
              data={progressBarData}
              title="เมนูแนะนำจัดโปรโมชัน"
              subtitle="ยอดขายสูงสุด"
            />
            <Calendar />
            <ActivityLog />
           <StatCard
            title="ยอดขายรวม"
            subtitle="สัปดาห์นี้"
            percentage="+12%"
            description="รวม 35,450 บาท"
            gradient="from-blue-600/30 to-indigo-500/20"
          />
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <ProgressTimeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
