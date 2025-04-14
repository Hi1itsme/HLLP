import React from "react";

export const Economy = (props) => {
  return (
    <div id="economy">
      <div className="container-fluid">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>The HODLOTTO Economy</h2>
        </div>

        <div className="row">
          <div className="col-xs-12 text-left">

            {/* === FIRST SECTION (Not in Grid) === */}
            <div className="economy-box">
              <h3>Understanding HODLOTTO's Economic Model</h3>
              <p>
                HODLOTTO introduces a unique economic system that balances sustainable growth, fair participation, and long-term rewards. Our model creates value through strategic holding rather than trading, establishing a new paradigm for digital asset utility.
              </p>
            </div>

            {/* === GRID START === */}
            <div className="economy-grid">

              {/* Core Economic Principles */}
              <div className="economy-box">
                <h3>Core Economic Principles</h3>

                <h4>1. Value Through Utility</h4>
                <p>Unlike speculative assets, HODLOTTO NFTs derive their value from:</p>
                <ul>
                  <li>Permanent lottery entry utility</li>
                  <li>Weighted chance mechanisms</li>
                  <li>Strategic tier selection</li>
                  <li>Compounding entry effects</li>
                </ul>

                <h4>2. Three-Token Ecosystem</h4>
                <p>HODLOTTO operates with three distinct tokens:</p>
                <ul>
                  <li><strong>Native Blockchain Currency (ETH)</strong>
                    <ul>
                      <li>Used for base minting operations</li>
                      <li>Accessible to newcomers to the ecosystem</li>
                      <li>Provides liquidity for the treasury</li>
                    </ul>
                  </li>
                  <li><strong>HODL Token</strong>
                    <ul>
                      <li>Primary utility token within the ecosystem</li>
                      <li>Used for premium tier minting</li>
                      <li>Provides governance rights (planned)</li>
                      <li>Benefits from deflationary mechanics</li>
                    </ul>
                  </li>
                  <li><strong>LOTTO Token</strong>
                    <ul>
                      <li>Secondary ecosystem token</li>
                      <li>Used for special promotions and events</li>
                      <li>Earned through participation</li>
                      <li>Enables community rewards</li>
                    </ul>
                  </li>
                </ul>

                <h4>3. Balanced Treasury Management</h4>
                <p>The HODLOTTO treasury:</p>
                <ul>
                  <li>Receives all minting proceeds</li>
                  <li>Maintains the prize pool reserve</li>
                  <li>Funds ecosystem development</li>
                  <li>Ensures long-term sustainability</li>
                </ul>
              </div>

              {/* NFT Tier Economics */}
              <div className="economy-box">
                <h3>NFT Tier Economics</h3>

                <h4>Investment Efficiency</h4>
                <p>While higher tiers require larger investments, they offer greater efficiency:</p>
                <div><strong>Tier - Entry Weight - Cost Efficiency</strong></div>
                <div>0 - 1 - Base efficiency</div>
                <div>1 - 2 - 10% more efficient than Tier 0</div>
                <div>2 - 4 - 20% more efficient than Tier 0</div>
                <div>3 - 8 - 30% more efficient than Tier 0</div>
                <div>4 - 16 - 40% more efficient than Tier 0</div>
                <div>5 - 32 - 50% more efficient than Tier 0</div>
                <div>6 - 64 - 60% more efficient than Tier 0</div>
                <div>7 - 128 - 70% more efficient than Tier 0</div>
                <div>8 - 256 - 80% more efficient than Tier 0</div>
                <div>9 - 512 - 90% more efficient than Tier 0</div>
                <p><small>Efficiency calculated based on entry weight per investment unit</small></p>

                <h4>Pricing Strategy</h4>
                <p>HODLOTTO's tier pricing follows a strategic curve that:</p>
                <ul>
                  <li>Rewards higher commitment</li>
                  <li>Creates natural entry points</li>
                  <li>Balances accessibility with exclusivity</li>
                  <li>Adjusts based on ecosystem growth</li>
                </ul>
              </div>

              {/* Prize Pool Mechanics */}
              <div className="economy-box">
                <h3>Prize Pool Mechanics</h3>

                <h4>Prize Pool Formation</h4>
                <p>The HODLOTTO prize pool is formed from:</p>
                <ul>
                  <li>70% of all minting proceeds</li>
                  <li>10% of secondary market royalties</li>
                  <li>Strategic treasury allocations</li>
                  <li>Sponsor contributions</li>
                </ul>

                <h4>Distribution Model</h4>
                <p>For standard weekly drawings:</p>
                <ul>
                  <li>85% to the primary winner</li>
                  <li>10% to secondary winners</li>
                  <li>5% to the community development fund</li>
                </ul>
                <p>For special event drawings:</p>
                <ul>
                  <li>Custom distribution based on event parameters</li>
                  <li>Typically higher allocation to multiple winners</li>
                  <li>May include non-monetary rewards</li>
                </ul>
              </div>

              {/* Economic Sustainability */}
              <div className="economy-box">
                <h3>Economic Sustainability</h3>

                <h4>Continuous Growth Model</h4>
                <p>Unlike traditional lotteries, HODLOTTO’s permanent entry system creates:</p>
                <ul>
                  <li>Increasing total entry pool</li>
                  <li>Growing prize pools</li>
                  <li>Natural scarcity of winning odds</li>
                  <li>Early participation incentives</li>
                </ul>

                <h4>Treasury Allocation</h4>
                <p>Funds are allocated to ensure long-term sustainability:</p>
                <ul>
                  <li>70% to prize pools</li>
                  <li>15% to dev & ops</li>
                  <li>10% to marketing</li>
                  <li>5% to community</li>
                </ul>
              </div>

              {/* Future Economic Developments */}
              <div className="economy-box">
                <h3>Future Economic Developments</h3>
                <p>Planned upgrades include:</p>
                <ul>
                  <li>Staking for enhanced rewards</li>
                  <li>DAO treasury governance</li>
                  <li>Diversified prize pools</li>
                  <li>Strategic ecosystem partnerships</li>
                </ul>
              </div>

              {/* Participation Strategy */}
              <div className="economy-box">
                <h3>Participation Strategy</h3>

                <h4>For Individuals</h4>
                <ul>
                  <li>Entry Strategy: Balance tier and volume</li>
                  <li>Reinvestment Strategy: Compound winnings</li>
                  <li>Diversification: Spread across tiers</li>
                </ul>

                <h4>For Groups/DAOs</h4>
                <ul>
                  <li>Pooling: Collective higher-tier entries</li>
                  <li>Distribution: Fair reward mechanisms</li>
                  <li>Governance: Tier selection collaboration</li>
                </ul>

                <p>
                  HODLOTTO’s economy is built for long-term engagement, aligning incentives with strategy and patience.
                </p>
              </div>

            </div>
            {/* === GRID END === */}

          </div>
        </div>
      </div>
    </div>
  );
};
