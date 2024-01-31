export const enum FilterStatus {
    ALL = 'ALL',
    UNCOMPLETED = 'UNCOMPLETED',
    COMPLETED = 'COMPLETED'
  }
  
 export type filterType = FilterStatus.ALL | FilterStatus.COMPLETED | FilterStatus.UNCOMPLETED