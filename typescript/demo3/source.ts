export interface IStruct {
    total: number;
    records: IStructRecords[];
}

export interface IStructRecords {
    productName: string;
    productAliasName: string;
    productTANo: string;
    productCode: string;
    productType: string;
    unitNv: string;
    singleYearYield: string;
    dailyYieldRate: string;
    dataDate: string;
    productStatus: string;
    dailyProfit: string;
    latestWeeklyYield: string;
    singleWeekYield: string;
    singleMonthYield: string;
    threeMonthYield: string;
    sixMonthYield: string;
    threeYearYield: string;
    fiveYearYield: string;
    sinceStartYield: string;
    assetScale: string;
    sharpeRateRank: string;
    goldenBullAwardCount: string;
    estimatedNv: number;
    estimatedGrowthRate: number;
    totalPerson: string;
}
