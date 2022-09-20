export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6329d3f7bed6fe3dccf2a42c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mcptefzo',
                  apiId: 'f9541ff9-2c06-4f26-896b-9957c206e2c5'
                },
                {
                  buildHookId: '6329d3f7a9491e46d00b276b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7qg3gjdt',
                  apiId: '60795861-a32c-49d4-ba14-5225ac471cfe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/4L3X3/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7qg3gjdt.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
