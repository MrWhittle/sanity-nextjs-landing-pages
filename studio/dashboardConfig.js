export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '608838473f8f577c9eec5956',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ujyr61kp',
                  apiId: '1bdbb8c9-7903-468e-973b-cccbdd2fe60c'
                },
                {
                  buildHookId: '6088384745b79a679da457f4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wp4rrk85',
                  apiId: '068d207a-5842-4505-b982-f1e3c6ddd2a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MrWhittle/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wp4rrk85.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
