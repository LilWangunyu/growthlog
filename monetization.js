'use strict';

class Analytics {
    constructor() {
        this.conversions = 0;
        this.adImpressions = 0;
        this.affiliateClicks = 0;
        this.revenue = 0;
    }
    trackConversion() {
        this.conversions++;
        console.log('Conversion tracked. Total conversions: ' + this.conversions);
    }
    trackAdImpression() {
        this.adImpressions++;
        console.log('Ad impression tracked. Total ad impressions: ' + this.adImpressions);
    }
    trackAffiliateClick() {
        this.affiliateClicks++;
        console.log('Affiliate click tracked. Total affiliate clicks: ' + this.affiliateClicks);
    }
    trackRevenue(amount) {
        this.revenue += amount;
        console.log('Revenue tracked. Total revenue: $' + this.revenue.toFixed(2));
    }
}

// Example usage:
// const analytics = new Analytics();
// analytics.trackConversion();
// analytics.trackAdImpression();
// analytics.trackAffiliateClick();
// analytics.trackRevenue(29.99);

module.exports = Analytics;