import React, { useState } from 'react';
import './App.css';
import CustomButton from './components/CustomButton';

function App() {
  const [playerName, setPlayerName] = useState(null);
  const [welcomeStep, setWelcomeStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tooltipNumber, setTooltipNumber] = useState(null);
  const [hasGreenbox, setHasGreenbox] = useState(false);
  const [displayGreenCar, setDisplayGreencar] = useState(false);
  const [displayGreenHouseShop, setDisplayGreenHouseShop] = useState(false);
  const [displayFinanceShop, setDisplayFinanceShop] = useState(false);
  const [displayTrade, setDisplayTrade] = useState(false);
  const [panelCounter, setPanelCounter] = useState(0);
  const [loanCounter, setLoanCounter] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handlePlayerNameChange = (event) => {
    setPlayerName(event.target.value);
  }
  const backgroundImage = isPlaying ? require('./assets/app_background_playing_1.jpg') : require('./assets/app_background.jpg'); 
  const greenboxPanel = hasGreenbox ? require('./assets/hasGreenBoxPanel.png') : require('./assets/noGreenBoxPanel.png'); 
  
  const displayTooltips = (number) => {
    switch(number) {
      case 1 :
          return "url(" + require('./assets/tooltip_1.png') + ")";
      case 2 :
          return "url(" + require('./assets/tooltip_2.png') + ")";
      case 3 :
          return "url(" + require('./assets/tooltip_3.png') + ")";
      default:
          return null;
    }
  }

  return (
    <div className="App-background" style={{backgroundImage: "url(" + backgroundImage + ")" }}>
      {isPlaying && !displayTrade && (
          <div
            className="App-greenbox-panel"
            style={{backgroundImage: "url(" + greenboxPanel + ")" }}
          />
        )}
      {welcomeStep === 1 && !isPlaying && !showResults && (
        <div className="App-panel">
          <h2 className="App-panel-title-h2" style={{ textAlign: 'center', color: '#59D571', marginTop: '6vh' }}>WELCOME TO</h2>
          <h1 className="App-panel-title-h1" style={{ textAlign: 'center', color: '#59D571' }}>THE POWER TRADER</h1>
          <h2 className="App-panel-title-h2" style={{ textAlign: 'center', color: '#59D571' }}>CHALLENGE</h2>
          <p className="App-panel-title-h4" style={{ textAlign: 'center', marginTop: '3vh' }}>Become the best new electricity trader of Wyoming.<br />Capture, store, share and sell your electricity. </p>
          <input className="App-panel-text-input" type="text" value={playerName} placeholder="Enter your name.." onChange={handlePlayerNameChange} />
          <CustomButton
            onClick={() => {
              if(playerName !== null) {
                setWelcomeStep(2)
              }
            }}
            title="Continue"
            customStyle={{ alignSelf: 'center', position: 'absolute', bottom: '6vh' }}
          />
        </div>
      )}
      {welcomeStep === 2 && !isPlaying && !showResults && (
        <div className="App-panel">
          <h2 className="App-panel-title-h2" style={{ textAlign: 'center', color: '#59D571', marginTop: '6vh' }}>{playerName + ', welcome to Wyoming'}</h2>
          <div className="App-panel-image-column">
            <div className="App-panel-cowboy" />
              <div style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                <p className="App-panel-title-h4">In Wyoming we are all about electricity and innovation.</p>
                <br />
                <p className="App-panel-title-h4">With our newest Green electricity solution it is now possible to capture, store, share, generate, and sell your electricity.</p>
                <br />
                <p className="App-panel-title-h4" style={{ fontFamily: 'Stilu-bold' }}>There is a big contest going on for the biggest electricity trader.</p>
                <br />
                <p className="App-panel-title-h4">Is that gonna be you?</p>
                <br />
                <p className="App-panel-title-h4" style={{ fontFamily: 'Stilu-bold' }}>You’ve got 10 minutes to find out!</p>
              </div>
          </div>
          
          <CustomButton
            onClick={() => {
              setIsPlaying(true);
              setTooltipNumber(1);
            }}
            title="Start"
            customStyle={{ alignSelf: 'center', position: 'absolute', bottom: '6vh' }} />
        </div>
      )}
      
      {!isPlaying && showResults && (
        <div className="App-panel">
          <h1 className="App-panel-title-h1" style={{ textAlign: 'center', color: '#59D571', marginTop: '6vh' }}>TIME IS UP</h1>
          <h4 className="App-panel-title-h4" style={{ textAlign: 'center', color: '#59D571' }}>YOU HAVE COLLECTED 2000 GREEN COIN ($20,000)</h4>
          <p className="App-panel-title-h4" style={{ textAlign: 'center', marginTop: '1.5vh' }}>You could save real Green Coins if you get a Green Box.</p>
          <p className="App-panel-p" style={{ textAlign: 'center', marginTop: '2vh', fontFamily: 'Stilu-bold' }}>Best electricity traders</p>

          <div className="App-ranking-result-wrapper">
            <div style={{ display: 'flex', alignSelf: 'stretch', padding: 20 }}>
              <p className="App-panel-title-h4" style={{ flex: 1, color: '#59D571' }}>You</p>
              <p className="App-panel-p" style={{ fontFamily: 'Stilu-bold' }}>2000 Green Coin</p>
            </div>
            <div style={{ height: 1, alignSelf: 'stretch', marginLeft: '3vh', marginRight: '3vh', backgroundColor: '#D8D8D8' }} />
            <div style={{ display: 'flex', alignSelf: 'stretch', padding: 20 }}>
              <p className="App-panel-title-h4" style={{ flex: 1 }}>Steve Thijssen</p>
              <p className="App-panel-p" style={{ fontFamily: 'Stilu-bold' }}>1000 Green Coin</p>
            </div>
          </div>
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: '3vh', display: 'flex', flexDirection: 'column' }}>
            <CustomButton
              onClick={() => {

              }}
              title="Get a Green Box"
              customStyle={{ alignSelf: 'center', marginBottom: 20, }}
            />
            <CustomButton
              onClick={() => {

              }}
              title="Play again"
              customStyle={{ alignSelf: 'center' }}
            />
          </div>
          
        </div>
      )}

      {isPlaying && displayGreenCar && (
        <div className="App-greencar" />
      )}
      
      {isPlaying && panelCounter !== 0 && !displayTrade && (
        <div className="App-sunPanel-wrapper">
          {panelCounter >= 1 && <div className="App-small-sunpanel" />}
          {panelCounter >= 2 && <div className="App-small-sunpanel" />}
          {panelCounter >= 3 && <div className="App-small-sunpanel" />}
          {panelCounter >= 4 && <div className="App-small-sunpanel" />}
          {panelCounter >= 5 && <div className="App-small-sunpanel" />}
          {panelCounter >= 6 && <div className="App-small-sunpanel" />}
          {panelCounter >= 7 && <div className="App-small-sunpanel" />}
          {panelCounter >= 8 && <div className="App-small-sunpanel" />}
          {panelCounter === 9 &&<div className="App-small-sunpanel" />}
        </div>
      )}

      {isPlaying && panelCounter !== 0 && !displayTrade && (
        <div className="App-sunPanel-info-wrapper">
          <p style={{ fontSize: 14, margin: 0, color: '#59D571', textAlign: 'center', fontFamily: 'Stilu-semibold' }}>{panelCounter + ' operational sunpanel.'}</p>
          <p style={{ fontSize: 14, margin: 0, color: '#59D571', textAlign: 'center', fontFamily: 'Stilu-semibold' }}>{'Generates ' + panelCounter * 20 + ' kW per second.'}</p>
        </div>
      )}
      
      {isPlaying && loanCounter !== null && !displayTrade && (
        <div className="App-loanpanel-info-wrapper">
          <p style={{ fontSize: 14, margin: 0, color: '#59D571', textAlign: 'center', fontFamily: 'Stilu-semibold' }}>{'Remaining loan of ' + loanCounter + 'CG.'}</p>
          <p style={{ fontSize: 14, margin: 0, color: '#59D571', textAlign: 'center', fontFamily: 'Stilu-semibold' }}>{'Paying ' + loanCounter / 10 + 'GC each minutes for 10 more minutes.'}</p>
        </div>
      )}

      {isPlaying && tooltipNumber === null && (
        <div onClick={() => setDisplayGreenHouseShop(true)} className="App-greenhouse-button" />
      )}
      
      {isPlaying && tooltipNumber === null && (
        <div onClick={() => setDisplayFinanceShop(true)} className="App-finance-button" />
      )}
      
      {isPlaying && tooltipNumber === null && (
        <div onClick={() => {
          setIsPlaying(false);
          setShowResults(true);
        }} className="App-stop-button" />
      )}

      {isPlaying && (
        <div className="App-stats-panels-wrapper">
          <div className="App-stat-panel">
            <p className="App-panel-title-h5 App-stat-panel-title">TIME LEFT</p>
            <p className="App-panel-title-h4" style={{ fontFamily: 'Stilu-bold', color: '#F13E3E', textAlign: 'center', marginTop: 10 }}>10:00</p>
          </div>
          <div  style={{ width: '6vw' }}/>
          <div className="App-stat-panel">
            <p className="App-panel-title-h5 App-stat-panel-title">STORED POWER</p>
            <p className="App-panel-title-h4" style={{ fontFamily: 'Stilu-bold', color: '#FFAF00', textAlign: 'center', marginTop: 10 }}>0 KW</p>
            <CustomButton
              onClick={() => {
                setDisplayTrade(true);
              }}
              title="Trade"
              customStyle={{ alignSelf: 'center', position: 'absolute', bottom: '1vh', height: 25, width: 75 }}
              customTitleStyle={{ fontSize: 12 }}
            />
          </div>
          <div style={{ width: '6vw' }} />
          <div className="App-stat-panel">
            <p className="App-panel-title-h5 App-stat-panel-title">GREEN COIN</p>
            <p className="App-panel-title-h4" style={{ fontFamily: 'Stilu-bold', color: '#3DC236', textAlign: 'center', marginTop: 10 }}>60 ($600)</p>
          </div>
        </div>
      )}

      {isPlaying && displayTrade && (
          <div
            className="App-trade"
            style={{backgroundImage: "url(" + require('./assets/trade_background.jpg') + ")" }}>
            <CustomButton
              onClick={() => {
                setDisplayTrade(false);
              }}
              title="Complete transaction"
              customStyle={{ alignSelf: 'center', position: 'absolute', bottom: '3vh' }}
            />
            </div>
        )}

      {isPlaying && tooltipNumber !== null && (
        <div
          onClick={() => {
            if(tooltipNumber === 1) {
              setTooltipNumber(2);
            }
            if(tooltipNumber === 2) {
              setTooltipNumber(3);
            }
            if(tooltipNumber === 3) {
              setTooltipNumber(null);
            }
          }}
          className="App-tooltip"
          style={{ backgroundImage: displayTooltips(tooltipNumber) }}
        />
      )}
    
      {
        isPlaying && displayFinanceShop && (
          <div className="App-greenhouse-modal-wrapper">
            <div className="App-greenhouse-modal">
              <h4 className="App-panel-title-h4" style={{ textAlign: 'center', fontFamily: 'Stilu-bold', marginTop: '6vh' }}>Welcome to the Green Finance.</h4>
              <p className="App-panel-p" style={{ textAlign: 'center', marginTop: '3vh' }}>May you need money, here you can take a loan out (comes with interests).</p>
              <div style={{ height: 1, alignSelf: 'stretch', marginTop: '3vh', marginBottom: '3vh', marginLeft: '3vh', marginRight: '3vh', backgroundColor: '#D8D8D8' }} />
              <h4 className="App-panel-title-h4" style={{ textAlign: 'center', fontFamily: 'Stilu-bold', marginTop: '3vh' }}>How big of a loan do you wish?</h4>
              <div className="App-greenhouse-modal-buttons-columns">
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CustomButton
                    onClick={() => {
                      setLoanCounter(110);
                      setDisplayFinanceShop(false);
                    }}
                    title="100 GC ($1000)"
                    customStyle={{ alignSelf: 'center',  height: 80, width: 250 }}
                    customTitleStyle={{ fontSize: 25 }}
                  />
                  <p className="App-panel-p" style={{ textAlign: 'center', marginTop: 20, color: '#59D571', fontFamily: 'Stilu-semibold' }}>10% interest. Pay 11 GC every minute for 10 minutes.</p>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CustomButton
                    onClick={() => {
                      setLoanCounter(210);
                      setDisplayFinanceShop(false);
                    }}
                    title="200 GC ($2000)"
                    customStyle={{ alignSelf: 'center',  height: 80, width: 250 }}
                    customTitleStyle={{ fontSize: 25 }}
                  />
                  <p className="App-panel-p" style={{ textAlign: 'center', marginTop: 20, color: '#59D571', fontFamily: 'Stilu-semibold' }}>5% interest. Pay 21 GC every minute for 10 minutes.</p>
                </div>
              </div>
              <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: '1vw', marginBottom: '1vw' }}>
                <CustomButton
                  onClick={() => {
                    setDisplayFinanceShop(false);
                  }}
                  title="Close"
                  customStyle={{ alignSelf: 'flex-end', height: 25, width: 75 }}
                  customTitleStyle={{ fontSize: 12 }}
                />
              </div>
            </div>
          </div>
        )
      }
      {isPlaying && displayGreenHouseShop && (
        <div className="App-greenhouse-modal-wrapper">
          <div className="App-greenhouse-modal">
            <h4 className="App-panel-title-h4" style={{ textAlign: 'center', fontFamily: 'Stilu-bold', marginTop: '6vh' }}>Welcome to the Green Shop.</h4>
            <p className="App-panel-p" style={{ textAlign: 'center', marginTop: '3vh' }}>Here you can buy Green boxes and sun panels to become a electricity trader.</p>
            <div style={{ height: 1, alignSelf: 'stretch', marginTop: '3vh', marginBottom: '3vh', marginLeft: '3vh', marginRight: '3vh', backgroundColor: '#D8D8D8' }} />
            <div className="App-greenhouse-modal-row-item">
              <div className="App-greenhouse-modal-row-item-greenbox-image" />
              <div style={{ flex: 1, marginRight: '3vw' }}>
                <h4 className="App-panel-title-h4" style={{ fontFamily: 'Stilu-bold' }}>Green box</h4>
                <p className="App-panel-p" style={{ fontFamily: 'Stilu-semibold', color: '#229C04' }}>Price: 150 GC</p>
                <p className="App-panel-p" style={{ }}>Unlocks the ability to trade your electricity. Generates 10kW per second.</p>
              </div>
              <div style={{}}>
                <CustomButton
                  onClick={() => {
                    setHasGreenbox(true);
                    setDisplayGreencar(true);
                    setDisplayGreenHouseShop(false);
                    setTimeout(() => setDisplayGreencar(false), 10000);
                  }}
                  title={hasGreenbox ? "Purchased" : "Buy"}
                  customStyle={{ alignSelf: 'center',  height: 25, width: 75, backgroundColor: hasGreenbox ? '#C1C1C1' : '#59D571' }}
                  customTitleStyle={{ fontSize: 12 }}
                />
              </div>
            </div>
            <div style={{ height: 1, alignSelf: 'stretch', marginTop: '3vh', marginBottom: '3vh', marginLeft: '3vh', marginRight: '3vh', backgroundColor: '#D8D8D8' }} />
            <div className="App-greenhouse-modal-row-item">
              <div className="App-greenhouse-modal-row-item-sunpanel-image" />
              <div style={{ flex: 1, marginRight: '3vw' }}>
                <h4 className="App-panel-title-h4" style={{ fontFamily: 'Stilu-bold' }}>Sun panel</h4>
                <p className="App-panel-p" style={{ fontFamily: 'Stilu-semibold', color: '#229C04' }}>Price: 250 GC</p>
                <p className="App-panel-p" style={{ }}>Generates 20kW per second.</p>
              </div>
              <div>
                <CustomButton
                  onClick={() => {
                    setPanelCounter(panelCounter + 1);
                    setDisplayGreenHouseShop(false);
                  }}
                  title={panelCounter === 9 ? 'Purchased' : 'Buy'}
                  customStyle={{ alignSelf: 'center',  height: 25, width: 75, backgroundColor: panelCounter === 9 ? '#C1C1C1' : '#59D571' }}
                  customTitleStyle={{ fontSize: 12 }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: '1vw', marginBottom: '1vw' }}>
              <CustomButton
                onClick={() => {
                  setDisplayGreenHouseShop(false);
                }}
                title="Close"
                customStyle={{ alignSelf: 'flex-end', height: 25, width: 75 }}
                customTitleStyle={{ fontSize: 12 }}
              />
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
