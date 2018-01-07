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
    	}
  	}
	}
}
`

export default ({ data }) => {

  return (
  <div>
  <h1 css={{fontSize: '12rem', display: 'block', float: 'left'}}>No</h1>
  <h2 css={{fontSize: '3rem', textAlign: 'right', width: '66%', marginTop: '0.7em', float: 'right'}}>We have 0 fucking trade deals agreed for when fucking Brexit happens</h2>

  <p css={{clear: 'both'}}>Here are all the countries in the world, and the status of UK trade deals with them ready for when we lose all our EU member benefits next year...</p>

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
                <span className="flag-icon flag-icon-{node.country}"></span>
                {node.name}
              </td>
              <td css={{textAlign: 'right'}}>
              {node.country === "GB" &&
                "Trading with ourselves doesn't fucking count"
              }

              {node.uktradedeal === "1" &&
                "Yes we actually do have a fucking trade deal!"
              }

              {node.uktradedeal === "0" &&
                "No we fucking don't have a trade deal, and haven't even started negotiations"
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
      <p>Out of those 759+ agreements that will be needed, the UK government has 0 and has started formal talks with 0 nations. This site will update as trade deals are announced.</p>
      <h2>Brexit spells disaster for the UK, and our government has failed to prepare. It is our patriotic duty to protect the UK by stopping Brexit.</h2>
      <p>So what can you do?</p>
      <ul>
        <li>There are some public interest legal cases that you can support:
          <ul>
            <li><a href="https://www.crowdjustice.com/case/a50-chall-her-e50/">Challenge the unconstitutional notification of Article 50</a>.</li>
            <li><a href="https://www.crowdjustice.com/case/secretbrexitstudies/">Force full disclouse of the Brexit 'impact studies'</a>.</li>
            <li><a href="https://www.crowdjustice.com/case/did-vote-leave-break-spending-limits/">Bring Vote Leave to account for allegedly breaking campaign spending rules</a>.</li>
            <li><a href="https://www.crowdjustice.com/case/strengthening/">Ensure the government allows parliameng to vote on all options</a>.</li>
          </ul>
        </li>
        <li><a href="https://www.stopbrexitmarch.com/">Take part in marches and campaigns across the UK to Stop Brexit</a>.</li>
        <li><a href="https://twitter.com/stopbrexit?lang=en">Follow @stopbrexit on Twitter for other news</a>.</li>
        <li>Although it can be hard, do follow the news (from reputable sources).</li>
        <li>Talk to family and friends about it to ensure people know the reality of what Brexit is going to mean. Public opinion is shifting, and we can all help that trend continue.</li>
      </ul>
      <p>There are good people out there doing good work. You are not alone, and you can be part of the movement to Stop Brexit or at least reduce its harmful impact.</p>
      <h1>Love Britain - Stop Brexit</h1>
      </div>
    )
}
