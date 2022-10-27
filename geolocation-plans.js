var setupPlans = (function setupPlans() {
    var CURRENCY_TYPE = {
        AUD: 'AUD',
        CAD: 'CAD',
        EUR: 'EUR',
        GBP: 'GBP',
        USD_BR_IN: 'USD_BR_IN',
        USD: 'USD'
    };
    var PLAN_NAME = {
        MONTHLY: {
            '100': '100-monthly',
            '1500': '1500-monthly',
            '5000': '5000-monthly',
            '25000': '25000-monthly',
            UNLIMITED: 'unlimited-monthly'
        },
        YEARLY: {
            '1500': '1500-yearly',
            '5000': '5000-yearly',
            '25000': '25000-yearly',
            UNLIMITED: 'unlimited-yearly'
        }
    };
    var PLAN_SELECTOR = {
        MONTHLY: {
            '100': 'plan-monthly-100',
            '1500': 'plan-monthly-1500',
            '5000': 'plan-monthly-5000',
            '25000': 'plan-monthly-25000',
            UNLIMITED: 'plan-monthly-unlimited'
        },
        YEARLY: {
            '1500': 'plan-yearly-1500',
            '5000': 'plan-yearly-5000',
            '25000': 'plan-yearly-25000',
            UNLIMITED: 'plan-yearly-unlimited'
        }
    };
    var PLAN_UUID_SELECTOR = {
        MONTHLY: {
            '100': 'plan-uuid-monthly-100',
            '1500': 'plan-uuid-monthly-1500',
            '5000': 'plan-uuid-monthly-5000',
            '25000': 'plan-uuid-monthly-25000',
            UNLIMITED: 'plan-uuid-monthly-unlimited'
        },
        YEARLY: {
            '1500': 'plan-uuid-yearly-1500',
            '5000': 'plan-uuid-yearly-5000',
            '25000': 'plan-uuid-yearly-25000',
            UNLIMITED: 'plan-uuid-yearly-unlimited'
        }
    };
    var PLAN_YEARLY_SAVINGS_SELECTOR = {
        '1500': 'plan-yearly-savings-1500',
        '5000': 'plan-yearly-savings-5000',
        '25000': 'plan-yearly-savings-25000',
        UNLIMITED: 'plan-yearly-savings-unlimited'
    };
    var COUNTRY_CODE = null;
    var onGeoIPSuccess = function onGeoIPSuccess(geoCodeResponse) {
        var geoCode = geoCodeResponse.country.iso_code;

        if (!geoCode) {
            geoCode = 'US';
        }

        COUNTRY_CODE = geoCode.toUpperCase();
        updatePage();
    };
    var onGeoIPError = function onGeoIPError() {
        COUNTRY_CODE = 'US';
        updatePage();
    };

    function getCurrencyType(countryCode) {
        var AUD = ['AU', 'NZ'];
        var CAD = ['CA'];
        var EUR = ['AT', 'BE', 'DE', 'ES', 'FI', 'FR', 'GR', 'IE', 'IT', 'NL', 'PT', 'SI'];
        var USD_BR_IN = ['BR', 'IN'];
        var GBP = ['GB', 'UK'];

        if (AUD.includes(countryCode)) {
            return CURRENCY_TYPE.AUD;
        } else if (CAD.includes(countryCode)) {
            return CURRENCY_TYPE.CAD;
        } else if (EUR.includes(countryCode)) {
            return CURRENCY_TYPE.EUR;
        } else if (GBP.includes(countryCode)) {
            return CURRENCY_TYPE.GBP;
        } else if (USD_BR_IN.includes(countryCode)) {
            return CURRENCY_TYPE.USD_BR_IN;
        }

        return CURRENCY_TYPE.USD;
    }

    function updatePage() {
        var browserCurrencyType = getCurrencyType(COUNTRY_CODE);
        var PLAN_COST = {
            AUD: {
                [PLAN_NAME.MONTHLY[100]]: '0',
                [PLAN_NAME.MONTHLY[1500]]: '14',
                [PLAN_NAME.MONTHLY[5000]]: '28',
                [PLAN_NAME.MONTHLY[25000]]: '42',
                [PLAN_NAME.MONTHLY.UNLIMITED]: '68',
                [PLAN_NAME.YEARLY[1500]]: '140',
                [PLAN_NAME.YEARLY[5000]]: '280',
                [PLAN_NAME.YEARLY[25000]]: '420',
                [PLAN_NAME.YEARLY.UNLIMITED]: '680'
            },
            CAD: {
                [PLAN_NAME.MONTHLY[100]]: '0',
                [PLAN_NAME.MONTHLY[1500]]: '12',
                [PLAN_NAME.MONTHLY[5000]]: '24',
                [PLAN_NAME.MONTHLY[25000]]: '36',
                [PLAN_NAME.MONTHLY.UNLIMITED]: '65',
                [PLAN_NAME.YEARLY[1500]]: '120',
                [PLAN_NAME.YEARLY[5000]]: '240',
                [PLAN_NAME.YEARLY[25000]]: '360',
                [PLAN_NAME.YEARLY.UNLIMITED]: '650'
            },
            EUR: {
                [PLAN_NAME.MONTHLY[100]]: '0',
                [PLAN_NAME.MONTHLY[1500]]: '9',
                [PLAN_NAME.MONTHLY[5000]]: '18',
                [PLAN_NAME.MONTHLY[25000]]: '27',
                [PLAN_NAME.MONTHLY.UNLIMITED]: '45',
                [PLAN_NAME.YEARLY[1500]]: '90',
                [PLAN_NAME.YEARLY[5000]]: '180',
                [PLAN_NAME.YEARLY[25000]]: '270',
                [PLAN_NAME.YEARLY.UNLIMITED]: '450'
            },
            GBP: {
                [PLAN_NAME.MONTHLY[100]]: '0',
                [PLAN_NAME.MONTHLY[1500]]: '8',
                [PLAN_NAME.MONTHLY[5000]]: '16',
                [PLAN_NAME.MONTHLY[25000]]: '24',
                [PLAN_NAME.MONTHLY.UNLIMITED]: '38',
                [PLAN_NAME.YEARLY[1500]]: '80',
                [PLAN_NAME.YEARLY[5000]]: '160',
                [PLAN_NAME.YEARLY[25000]]: '240',
                [PLAN_NAME.YEARLY.UNLIMITED]: '380'
            },
            USD: {
                [PLAN_NAME.MONTHLY[100]]: '0',
                [PLAN_NAME.MONTHLY[1500]]: '10',
                [PLAN_NAME.MONTHLY[5000]]: '20',
                [PLAN_NAME.MONTHLY[25000]]: '30',
                [PLAN_NAME.MONTHLY.UNLIMITED]: '60',
                [PLAN_NAME.YEARLY[1500]]: '100',
                [PLAN_NAME.YEARLY[5000]]: '200',
                [PLAN_NAME.YEARLY[25000]]: '300',
                [PLAN_NAME.YEARLY.UNLIMITED]: '600'
            },
            USD_BR_IN: {
                [PLAN_NAME.MONTHLY[100]]: '0',
                [PLAN_NAME.MONTHLY[1500]]: '5',
                [PLAN_NAME.MONTHLY[5000]]: '10',
                [PLAN_NAME.MONTHLY[25000]]: '15',
                [PLAN_NAME.MONTHLY.UNLIMITED]: '40',
                [PLAN_NAME.YEARLY[1500]]: '50',
                [PLAN_NAME.YEARLY[5000]]: '100',
                [PLAN_NAME.YEARLY[25000]]: '150',
                [PLAN_NAME.YEARLY.UNLIMITED]: '400'
            }
        };
        var CURRENCY_SYMBOL = {
            [CURRENCY_TYPE.AUD]: 'A$',
            [CURRENCY_TYPE.CAD]: 'CA$',
            [CURRENCY_TYPE.EUR]: 'â‚¬',
            [CURRENCY_TYPE.GBP]: 'Â£',
            [CURRENCY_TYPE.USD]: '$',
            [CURRENCY_TYPE.USD_BR_IN]: '$'
        };
        var PLAN_UUID = {
            AUD: {
                [PLAN_NAME.MONTHLY[100]]: '64283cdf-4f97-4f3a-9f07-f332517e4427',
                [PLAN_NAME.MONTHLY[1500]]: 'a2bfb690-3ba6-42fb-ada6-9ce9b0ac9dcf',
                [PLAN_NAME.MONTHLY[5000]]: 'f0722b8d-7709-4e1f-8b65-0c2aea88d7a1',
                [PLAN_NAME.MONTHLY[25000]]: '7456fb1b-d1f0-485f-a5a6-087fa82e7ffb',
                [PLAN_NAME.MONTHLY.UNLIMITED]: '848960e7-84ab-48f3-959f-b236bf2a9c0a',
                [PLAN_NAME.YEARLY[1500]]: '07fe5fe8-7fa3-4ab7-8233-2195def33283',
                [PLAN_NAME.YEARLY[5000]]: '90e04993-1afc-4e65-9aa3-2998c108c28b',
                [PLAN_NAME.YEARLY[25000]]: 'a7adf1ef-cff2-4e02-8120-5215fa5e05e0',
                [PLAN_NAME.YEARLY.UNLIMITED]: 'b77e4b03-1e24-431a-ae3e-efca0e06c418'
            },
            CAD: {
                [PLAN_NAME.MONTHLY[100]]: '97b4a7d9-c314-4bf7-8f81-96054d2c38f6',
                [PLAN_NAME.MONTHLY[1500]]: '9dd1fac5-79f0-48f8-a5e1-c41f4c082051',
                [PLAN_NAME.MONTHLY[5000]]: '8ac1fdb1-2964-464d-af44-0952df49d8c2',
                [PLAN_NAME.MONTHLY[25000]]: '13e10702-1689-47f6-8961-720dbd8d9d8c',
                [PLAN_NAME.MONTHLY.UNLIMITED]: '9de7bf77-6fc5-49c0-89be-c4107e1abc8c',
                [PLAN_NAME.YEARLY[1500]]: 'c300f4a9-aa0f-4c63-8f57-b8027660eb84',
                [PLAN_NAME.YEARLY[5000]]: '233dd569-8676-4ab0-b46e-0f257a7f6c1d',
                [PLAN_NAME.YEARLY[25000]]: '36892f88-8ad7-4bc4-88e3-6473c7476d9a',
                [PLAN_NAME.YEARLY.UNLIMITED]: 'a8c479e6-19e1-4d88-bcdf-4e8640b68021'
            },
            EUR: {
                [PLAN_NAME.MONTHLY[100]]: '452997d1-fcda-4fd5-85ce-b5b488b79165',
                [PLAN_NAME.MONTHLY[1500]]: '104e8410-b150-420b-9503-6d67dd7126ed',
                [PLAN_NAME.MONTHLY[5000]]: 'ed8919a3-9be3-49cd-97cd-0ce684477fc1',
                [PLAN_NAME.MONTHLY[25000]]: 'a8960d5f-9344-4279-bc30-c7cfd7d152aa',
                [PLAN_NAME.MONTHLY.UNLIMITED]: 'fb5f7caa-71a5-4973-9d36-0f2c639b784f',
                [PLAN_NAME.YEARLY[1500]]: '6ef5e1f7-b8e5-48cc-9762-e2d2f6a41754',
                [PLAN_NAME.YEARLY[5000]]: '7d9e5a23-64f6-47a0-8f64-8df76a581477',
                [PLAN_NAME.YEARLY[25000]]: 'aa680636-ed86-4f01-a618-6d30605492e9',
                [PLAN_NAME.YEARLY.UNLIMITED]: '4120c819-926b-4608-be55-6850eb1ab9ff'
            },
            GBP: {
                [PLAN_NAME.MONTHLY[100]]: '10e1aecf-4b06-4221-bfa8-37bb73a39315',
                [PLAN_NAME.MONTHLY[1500]]: '627dab20-b99f-4ff0-82f5-dc0dd0fe7ecf',
                [PLAN_NAME.MONTHLY[5000]]: '5df2818b-2d7a-4fd9-984f-556dede2c76b',
                [PLAN_NAME.MONTHLY[25000]]: '8f78b36e-d0a5-4c46-8b7c-92a6e6d81ba2',
                [PLAN_NAME.MONTHLY.UNLIMITED]: '7c596a62-3d9f-4696-9bb6-0d9232e28ab7',
                [PLAN_NAME.YEARLY[1500]]: '41766f7c-1d68-4ba2-9d01-413278c62d66',
                [PLAN_NAME.YEARLY[5000]]: 'b1212766-b20c-4b41-86d3-5a147e3c2a28',
                [PLAN_NAME.YEARLY[25000]]: '73bb8a72-9a2d-4eb4-a156-e1a64ae9a58f',
                [PLAN_NAME.YEARLY.UNLIMITED]: 'c8adbe28-24c5-4e06-bb96-38bdcd72852e'
            },
            USD: {
                [PLAN_NAME.MONTHLY[100]]: 'fba1b880-a5e4-4b3a-8a19-20b332bbb3a2',
                [PLAN_NAME.MONTHLY[1500]]: '9abcfa1e-be99-4f58-aa7d-8048d01e471c',
                [PLAN_NAME.MONTHLY[5000]]: 'b7159a63-4082-4988-9f78-3be97035c266',
                [PLAN_NAME.MONTHLY[25000]]: '05df1644-945c-4a71-be45-621f5886f2ff',
                [PLAN_NAME.MONTHLY.UNLIMITED]: '14f6e5cf-82a3-4ad5-97b3-ec4df661b097',
                [PLAN_NAME.YEARLY[1500]]: '70ee526e-f1e2-4bb3-a593-55111964c55d',
                [PLAN_NAME.YEARLY[5000]]: '2b5cf8a3-66a1-4657-a671-286285e1bec5',
                [PLAN_NAME.YEARLY[25000]]: '3a230f22-d04a-46f0-8eba-244c4926cc86',
                [PLAN_NAME.YEARLY.UNLIMITED]: '7d77815a-d106-4b07-be20-d609b423de82'
            },
            USD_BR_IN: {
                [PLAN_NAME.MONTHLY[100]]: '20f33091-93ae-415d-b175-ac19ad739d18',
                [PLAN_NAME.MONTHLY[1500]]: 'cd44d40a-cb49-486d-8c24-0789f3a34cfa',
                [PLAN_NAME.MONTHLY[5000]]: 'ee4fe33c-dc22-45cc-82fc-274707f29c62',
                [PLAN_NAME.MONTHLY[25000]]: 'd2a283d3-384b-4cb8-9880-d502b7d9a86c',
                [PLAN_NAME.MONTHLY.UNLIMITED]: 'ff94f926-922b-4a5d-adbb-bb846063d767',
                [PLAN_NAME.YEARLY[1500]]: '9b2ca6e0-aeea-4f10-9f27-b03c6bf00ae0',
                [PLAN_NAME.YEARLY[5000]]: '9ee190a2-c1da-4edd-be37-fa5702f44fd4',
                [PLAN_NAME.YEARLY[25000]]: 'b03c3afe-be20-4505-b4d4-44999dbcb3c2',
                [PLAN_NAME.YEARLY.UNLIMITED]: '7152f28f-a3a7-443f-8170-ae45c3fb4094'
            }
        };

        updateAllPlanHrefs();
        updateAllPlanText();
        updateAllYearlySavings();

        function updateAllPlanHrefs() {
            var MONTHLY_FREE_BUTTON = document.getElementById(PLAN_UUID_SELECTOR.MONTHLY[100]);
            var MONTHLY_1500_BUTTON = document.getElementById(PLAN_UUID_SELECTOR.MONTHLY[1500]);
            var MONTHLY_5000_BUTTON = document.getElementById(PLAN_UUID_SELECTOR.MONTHLY[5000]);
            var MONTHLY_25000_BUTTON = document.getElementById(PLAN_UUID_SELECTOR.MONTHLY[25000]);
            var MONTHLY_UNLIMITED_BUTTON = document.getElementById(
                PLAN_UUID_SELECTOR.MONTHLY.UNLIMITED
            );
            var YEARLY_1500_BUTTON = document.getElementById(PLAN_UUID_SELECTOR.YEARLY[1500]);
            var YEARLY_5000_BUTTON = document.getElementById(PLAN_UUID_SELECTOR.YEARLY[5000]);
            var YEARLY_25000_BUTTON = document.getElementById(PLAN_UUID_SELECTOR.YEARLY[25000]);
            var YEARLY_UNLIMITED_BUTTON = document.getElementById(
                PLAN_UUID_SELECTOR.YEARLY.UNLIMITED
            );

            if (MONTHLY_FREE_BUTTON) {
                MONTHLY_FREE_BUTTON.href = getPlanURL(
                    PLAN_UUID[browserCurrencyType][PLAN_NAME.MONTHLY[100]]
                );
            }

            if (MONTHLY_1500_BUTTON) {
                MONTHLY_1500_BUTTON.href = getPlanURL(
                    PLAN_UUID[browserCurrencyType][PLAN_NAME.MONTHLY[1500]]
                );
            }

            if (MONTHLY_5000_BUTTON) {
                MONTHLY_5000_BUTTON.href = getPlanURL(
                    PLAN_UUID[browserCurrencyType][PLAN_NAME.MONTHLY[5000]]
                );
            }

            if (MONTHLY_25000_BUTTON) {
                MONTHLY_25000_BUTTON.href = getPlanURL(
                    PLAN_UUID[browserCurrencyType][PLAN_NAME.MONTHLY[25000]]
                );
            }

            if (MONTHLY_UNLIMITED_BUTTON) {
                MONTHLY_UNLIMITED_BUTTON.href = getPlanURL(
                    PLAN_UUID[browserCurrencyType][PLAN_NAME.MONTHLY.UNLIMITED]
                );
            }

            if (YEARLY_1500_BUTTON) {
                YEARLY_1500_BUTTON.href = getPlanURL(
                    PLAN_UUID[browserCurrencyType][PLAN_NAME.YEARLY[1500]]
                );
            }

            if (YEARLY_5000_BUTTON) {
                YEARLY_5000_BUTTON.href = getPlanURL(
                    PLAN_UUID[browserCurrencyType][PLAN_NAME.YEARLY[5000]]
                );
            }

            if (YEARLY_25000_BUTTON) {
                YEARLY_25000_BUTTON.href = getPlanURL(
                    PLAN_UUID[browserCurrencyType][PLAN_NAME.YEARLY[25000]]
                );
            }

            if (YEARLY_UNLIMITED_BUTTON) {
                YEARLY_UNLIMITED_BUTTON.href = getPlanURL(
                    PLAN_UUID[browserCurrencyType][PLAN_NAME.YEARLY.UNLIMITED]
                );
            }
        }

        function updateAllPlanText() {
            var MONTHLY_FREE_DESCRIPTION = document.getElementById(PLAN_SELECTOR.MONTHLY[100]);
            var MONTHLY_1500_DESCRIPTION = document.getElementById(PLAN_SELECTOR.MONTHLY[1500]);
            var MONTHLY_5000_DESCRIPTION = document.getElementById(PLAN_SELECTOR.MONTHLY[5000]);
            var MONTHLY_25000_DESCRIPTION = document.getElementById(PLAN_SELECTOR.MONTHLY[25000]);
            var MONTHLY_UNLIMITED_DESCRIPTION = document.getElementById(
                PLAN_SELECTOR.MONTHLY.UNLIMITED
            );
            var YEARLY_1500_DESCRIPTION = document.getElementById(PLAN_SELECTOR.YEARLY[1500]);
            var YEARLY_5000_DESCRIPTION = document.getElementById(PLAN_SELECTOR.YEARLY[5000]);
            var YEARLY_25000_DESCRIPTION = document.getElementById(PLAN_SELECTOR.YEARLY[25000]);
            var YEARLY_UNLIMITED_DESCRIPTION = document.getElementById(
                PLAN_SELECTOR.YEARLY.UNLIMITED
            );

            if (MONTHLY_FREE_DESCRIPTION) {
                MONTHLY_FREE_DESCRIPTION.innerHTML = getMonthlyPlanTranslation(
                    PLAN_NAME.MONTHLY[100]
                );
            }

            if (MONTHLY_1500_DESCRIPTION) {
                MONTHLY_1500_DESCRIPTION.innerHTML = getMonthlyPlanTranslation(
                    PLAN_NAME.MONTHLY[1500]
                );
            }

            if (MONTHLY_5000_DESCRIPTION) {
                MONTHLY_5000_DESCRIPTION.innerHTML = getMonthlyPlanTranslation(
                    PLAN_NAME.MONTHLY[5000]
                );
            }

            if (MONTHLY_25000_DESCRIPTION) {
                MONTHLY_25000_DESCRIPTION.innerHTML = getMonthlyPlanTranslation(
                    PLAN_NAME.MONTHLY[25000]
                );
            }

            if (MONTHLY_UNLIMITED_DESCRIPTION) {
                MONTHLY_UNLIMITED_DESCRIPTION.innerHTML = getMonthlyPlanTranslation(
                    PLAN_NAME.MONTHLY.UNLIMITED
                );
            }

            if (YEARLY_1500_DESCRIPTION) {
                YEARLY_1500_DESCRIPTION.innerHTML = getYearlyPlanTranslation(
                    PLAN_NAME.YEARLY[1500]
                );
            }

            if (YEARLY_5000_DESCRIPTION) {
                YEARLY_5000_DESCRIPTION.innerHTML = getYearlyPlanTranslation(
                    PLAN_NAME.YEARLY[5000]
                );
            }

            if (YEARLY_25000_DESCRIPTION) {
                YEARLY_25000_DESCRIPTION.innerHTML = getYearlyPlanTranslation(
                    PLAN_NAME.YEARLY[25000]
                );
            }

            if (YEARLY_UNLIMITED_DESCRIPTION) {
                YEARLY_UNLIMITED_DESCRIPTION.innerHTML = getYearlyPlanTranslation(
                    PLAN_NAME.YEARLY.UNLIMITED
                );
            }
        }

        function updateAllYearlySavings() {
            var YEARLY_1500_SAVINGS_DESCRIPTION = document.getElementById(
                PLAN_YEARLY_SAVINGS_SELECTOR[1500]
            );
            var YEARLY_5000_SAVINGS_DESCRIPTION = document.getElementById(
                PLAN_YEARLY_SAVINGS_SELECTOR[5000]
            );
            var YEARLY_25000_SAVINGS_DESCRIPTION = document.getElementById(
                PLAN_YEARLY_SAVINGS_SELECTOR[25000]
            );
            var YEARLY_UNLIMITED_SAVINGS_DESCRIPTION = document.getElementById(
                PLAN_YEARLY_SAVINGS_SELECTOR.UNLIMITED
            );

            if (YEARLY_1500_SAVINGS_DESCRIPTION) {
                YEARLY_1500_SAVINGS_DESCRIPTION.innerHTML = getYearlySavings(
                    PLAN_NAME.MONTHLY[1500],
                    PLAN_NAME.YEARLY[1500]
                );
            }

            if (YEARLY_5000_SAVINGS_DESCRIPTION) {
                YEARLY_5000_SAVINGS_DESCRIPTION.innerHTML = getYearlySavings(
                    PLAN_NAME.MONTHLY[5000],
                    PLAN_NAME.YEARLY[5000]
                );
            }

            if (YEARLY_25000_SAVINGS_DESCRIPTION) {
                YEARLY_25000_SAVINGS_DESCRIPTION.innerHTML = getYearlySavings(
                    PLAN_NAME.MONTHLY[25000],
                    PLAN_NAME.YEARLY[25000]
                );
            }

            if (YEARLY_UNLIMITED_SAVINGS_DESCRIPTION) {
                YEARLY_UNLIMITED_SAVINGS_DESCRIPTION.innerHTML = getYearlySavings(
                    PLAN_NAME.MONTHLY.UNLIMITED,
                    PLAN_NAME.YEARLY.UNLIMITED
                );
            }
        }

        function getMonthlyPlanTranslation(planName) {
            return CURRENCY_SYMBOL[browserCurrencyType] + PLAN_COST[browserCurrencyType][planName];
        }

        function getPlanURL(planUUID) {
            return 'https://studio.shootproof.com/signup?plan_uuid=' + planUUID;
        }

        function getYearlyPlanTranslation(planName) {
            var yearlyCost = PLAN_COST[browserCurrencyType][planName];

            return CURRENCY_SYMBOL[browserCurrencyType] + yearlyCost;
        }

        function getYearlySavings(monthlyPlan, yearlyPlan) {
            var monthlyCost = PLAN_COST[browserCurrencyType][monthlyPlan];
            var yearlyCost = PLAN_COST[browserCurrencyType][yearlyPlan];

            return (
                CURRENCY_SYMBOL[browserCurrencyType] + (monthlyCost * 12 - yearlyCost).toString()
            );
        }
    }

    return function getCountry() {
        geoip2.country(onGeoIPSuccess, onGeoIPError);
    };
})();

setupPlans();
