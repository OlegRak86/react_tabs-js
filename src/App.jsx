import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const [tabItem, setTabItem] = useState(tabs[0]);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${tabItem.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>

            {tabs.map(tab => (
              <Tabs
                tab={tab}
                selectedTabId={selectedTabId}
                key={tab.id}
                setTabItem={(item) => {
                  setTabItem(item);
                }}
                onTabSelected={(valueId) => {
                  setSelectedTabId(valueId);
                }}
              />

            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabItem.content}
        </div>
      </div>
    </div>
  );
};
