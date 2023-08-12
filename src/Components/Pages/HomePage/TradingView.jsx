import { useRouter } from 'next/router';
import React from 'react';
import TradingViewWidget, {
    Themes,
    IntervalTypes,
  } from "react-tradingview-widget";
import { SingleWrapper } from './style';
import styled from 'styled-components';

const TradingView = () => {
    const router = useRouter();


    return (
        <Styled>
            <TradingViewWidget
              // symbol="NASDAQ:AAPL"
              theme={Themes.DARK}
              // locale="fr"
              autosize
              symbol={router.query.key}
              interval={IntervalTypes.M}
              timezone="Etc/UTC"
              style="1"
              locale="in"
            />
        </Styled>
    );
};

const Styled = styled.div`
    height: 100%;

`

export default TradingView;