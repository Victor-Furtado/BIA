import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import EntryStack from './EntryStack';
import MainTabs from './MainTabs';

export default props => (
    <NavigationContainer>
        <EntryStack />
    </NavigationContainer>
)