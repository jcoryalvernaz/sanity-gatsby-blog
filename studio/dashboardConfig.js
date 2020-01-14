export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e1df744455e48fd8af72995',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-as828wu8',
                  apiId: 'b7939c3e-c733-4379-bffb-50f072b87201'
                },
                {
                  buildHookId: '5e1df74577168ba3ecab6d2a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fkkxxv8u',
                  apiId: 'f90ccc92-00ca-4c16-8074-47a8f12da3b1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jcoryalvernaz/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fkkxxv8u.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
