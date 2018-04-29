export type ChannelKind = 'r' | 'g' | 'b';

export interface Channel {
  kind: 'r' | 'g' | 'b';
}

export interface Fixture {
  universe: number;
  startChannel: number;
  channels: Channel[];
  group: string;
}

export interface Group {
  id: string;
  subGroups?: Group[];
}

export interface Config {
  fixtures: Fixture[];
  groups: Group[];
}

const fixtures: Fixture[] = [];

const simpleRgbFixtureChannels: Channel[] = [
  {kind: 'r'},
  {kind: 'g'},
  {kind: 'b'}
];

// Small Hexigons
fixtures.push(...[1, 4, 10, 13, 16, 19, 28, 31, 37, 40, 46, 52, 70, 73, 79].map<Fixture>(startChannel => ({
  universe: 0,
  startChannel,
  channels: simpleRgbFixtureChannels,
  group: 'hex-small'
})));

// Medium Hexigons
fixtures.push(...[7, 25, 43, 49, 61, 64, 76].map<Fixture>(startChannel => ({
  universe: 0,
  startChannel,
  channels: simpleRgbFixtureChannels,
  group: 'hex-med'
})));

// Big Hexigons
fixtures.push(...[22, 34, 55, 58].map<Fixture>(startChannel => ({
  universe: 0,
  startChannel,
  channels: simpleRgbFixtureChannels,
  group: 'hex-big'
})));

const config: Config = {
  fixtures,
  groups: [{
    id: 'hex',
    subGroups: [
      {id: 'hex-big'},
      {id: 'hex-med'},
      {id: 'hex-small'}
    ]
  }]
};

export function getConfig() {
  return config;
}
