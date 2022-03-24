export interface IPlayerData {
  // 队伍id
  teamId: string;
  // 编号
  number: string;
  // 队服上的名字 
  nickname: string;
  // 名字
  name: string;
  // 每次的跑动的路线
  cutPathing: any[];
  // 是否持盘
  holding: boolean;
  // 是否handler
  isHandler: boolean;
  // 速度
  speed: number;
}