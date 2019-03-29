import adaCalculator from './images/ada-calculator.png';
import blockly from './images/blockly.png';
import cardanoDark from './images/cardano-dark.svg';
import cardanoTestnets from './images/cardano-testnets.svg';
import cardano from './images/cardano.svg';
import daedalus from './images/daedalus.png';
import FPComplete from './images/fp-complete.png';
import IOHK from './images/iohk.png';
import react from './images/react.svg';
import sirinLabs from './images/sirin-labs.svg';
import traxia from './images/traxia.png';
import youtube from './images/youtube.png';

export default [
  {
    id: 'official',
    projects: [
      { id: 'cardano-roadmap', imageURL: cardano },
      { id: 'cardano-testnets', imageURL: cardanoTestnets },
      { id: 'cardano-sl', imageURL: cardanoDark, githubURL: 'https://github.com/input-output-hk/cardano-sl' },
      { id: 'daedalus', imageURL: daedalus, githubURL: 'https://github.com/input-output-hk/daedalus' },
      { id: 'cardano-blockchain-explorer', imageURL: cardanoDark, githubURL: 'https://github.com/input-output-hk/cardano-sl/tree/master/explorer' },
      { id: 'cardano-audit-reports', imageURL: FPComplete },
      { id: 'iohk-presentations-press', imageURL: youtube },
      { id: 'iohk-research-library', imageURL: IOHK },
      { id: 'meadow', imageURL: blockly, githubURL: 'https://github.com/input-output-hk/scdsl/tree/master/meadow' },
      { id: 'react-polymorph', imageURL: react, githubURL: 'https://github.com/input-output-hk/react-polymorph' },
      { id: 'plutus-language-prototype', githubURL: 'https://github.com/input-output-hk/plutus-prototype' },
      { id: 'scrypto', githubURL: 'https://github.com/input-output-hk/scrypto' },
      { id: 'icarus' },
    ],
  },
  {
    id: 'related',
    projects: [
      { id: 'traxia', imageURL: traxia },
      { id: 'sirin-labs', imageURL: sirinLabs },
    ],
  },
  {
    id: 'community',
    projects: [
      { id: 'cardano-wiki' },
      { id: 'cardano-updates' },
      { id: 'cardano-weekly-technical-report-explained', imageURL: youtube },
      { id: 'ada-tracker' },
      { id: 'cardano-staking-profits-calculator', githubURL: 'https://github.com/antipalos/antipalos.github.io/tree/master/cardano-calculator' },
      { id: 'ada-check' },
      { id: 'ada-calculator', imageURL: adaCalculator },
    ],
  },
];
