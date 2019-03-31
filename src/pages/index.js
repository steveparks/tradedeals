import React from 'react'
import Link from 'gatsby-link'

export const query = graphql`
  query CountriesQuery {
  allCountriesCsv {
  	edges {
    	node {
      	name
      	country
        uktradedeal
        dealinfo
        link
    	}
  	}
	}
}
`

export default ({ data }) => {

  return (
  <div>
  <h1 css={{fontSize: '7.5rem', display: 'block', float: 'left'}}>Kind of</h1>
  <h2 css={{fontSize: '2.0rem', textAlign: 'right', width: '50%', marginTop: '0.7em', float: 'right'}}>We have only ~3.5 fucking trade deals and Brexit was meant to have happened</h2>

  <p css={{clear: 'both'}}>The list below shows all the countries in the world, and the status of UK trade deals with them ready for when we lose all our EU member benefits, such as free trade deals.</p>
  <p>At the bottom of the page is a summary of the full analysis by the Financial Times of treaties that will need to be negotiated — and some ideas for action you can take to stop this fucking madness.</p>

  <table>
        <thead>
          <tr>
            <th>Country</th>
            <th css={{textAlign: 'right'}}>Do we have a fucking trade deal?</th>
          </tr>
        </thead>
        <tbody>
          {data.allCountriesCsv.edges.map(({ node }, index) =>
            <tr key={index}>
              <td>
                <span className={'flag-icon flag-icon-' + node.country.toLowerCase()}></span>
                {node.name}
              </td>
              <td css={{textAlign: 'right'}}>
              {node.country === "GB" &&
                "Trading with ourselves doesn't fucking count"
              }

              {node.uktradedeal === "0.5" &&
                node.dealinfo
              }

              {node.uktradedeal === "1" &&
                node.dealinfo
              }

              {node.uktradedeal === "0" &&
                "No we fucking don't have a trade deal"
              }
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <h1>And this is just the start...</h1>
      <p>The <a href="https://www.ft.com/content/f1435a8e-372b-11e7-bce4-9023f8c0fd2e">Financial Times conducted research</a> that showed that the UK will have to negotiate at least 759 separate treaties:</p>
      <ul>
      <li>295 Trade Agreements - including the bilateral ones listed above PLUS other multilateral agreements</li>
      <li>202 Regulatory Cooperation Agreements - everything from anti-trust to data sharing</li>
      <li>69 Fisheries Agreements - access to waters, protection of stocks</li>
      <li>65 Transport Agreements</li>
      <li>49 Customs Agreements</li>
      <li>45 Nuclear Agreements</li>
      <li>34 Agriculture Agreements</li>
      </ul>
      <p>Out of those 759+ agreements that will be needed, the UK government has the equivalent of 3.5 by our judgment. Yet we were already supposed to have left!</p>
      <h2>Brexit spells disaster for the UK, and our government has failed to prepare. It is our patriotic duty to protect the UK by stopping Brexit.</h2>
      <p>So what can you do?</p>
      <ul>
        <li><a href="https://www.crowdjustice.com/cases/?filter=brexit">There are some public interest legal cases that you can support</a>.</li>
        <li><a href="https://petition.parliament.uk/petitions/241584">Sign the petition to revoke Article 50, and tell your friends</a>.</li>
        <li><a href="https://www.writetothem.com/">Write to your MP to ask them to support revoking Article 50 and a Peoples Vote</a>.</li>
        <li>Although it can be hard, do follow the news (from reputable sources).</li>
        <li>Talk to family and friends about it to ensure people know the reality of what Brexit is going to mean. Public opinion is shifting, and we can all help that trend continue.</li>
      </ul>
      <p>There are good people out there doing good work. You are not alone, and you can be part of the movement to Stop Brexit or at least reduce its harmful impact.</p>
      <h1>Love Britain - Stop Brexit</h1>
      <br />
      </div>
    )
}
