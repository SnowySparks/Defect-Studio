import { Tabs } from 'antd';
import TrainingStartTab from '../components/training/tabs/TrainingStartTab';
import TrainingStatusTab from '../components/training/tabs/TrainingStatusTab';
import styled from 'styled-components';

const { TabPane } = Tabs;

const CustomTabs = styled(Tabs)`
  .ant-tabs-nav::before {
    border-bottom: none !important;
  }
`;

const Training = () => {
  return (
    <div className="w-full h-[calc(100vh-60px)] bg-gray-100 px-8 pt-4 pb-8 dark:bg-gray-800">
      <CustomTabs defaultActiveKey="1" className="h-full">
        {/* 모델 훈련 */}
        <TabPane tab="Model Training" key="1" className="h-full">
          <div className="h-full">
            <TrainingStartTab />
          </div>
        </TabPane>

        {/* 모델 훈련 진행상황 */}
        <TabPane tab="Training Status" key="2" className="h-full">
          <div className="h-full">
            <TrainingStatusTab />
          </div>
        </TabPane>
      </CustomTabs>
    </div>
  );
};

export default Training;