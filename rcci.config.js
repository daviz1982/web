module.exports = {
    multiProject: false /* Enable searching projects with component folder path */,
    skipFinalStep: false /* Toggle final step agreement */,
    folderPath: 'src/' /* Destination path or array of paths to create components */,
    templatesFolder: 'templates' /* Folder which contains templates */,
    templates: {
        /* Component folder structure declaration */
        index: {
            name: 'index.js',
            file: 'index.js'
        },
        component: {
            name: '[name].js',
            file: [
                { name: 'fc.js', description: 'Functional component' },
                { name: 'class.js', description: 'Class component' }
            ]
        },
        style: {
            name: '[name].scss',
            optional: true,
            default: true
        },
        stories: {
            name: '[name].stories.tsx',
            file: 'stories.tsx',
            optional: true,
            default: false
        },
        test: {
            name: '[name].test.js' /*'__tests__/[name].test.tsx' to put tests into subfolder*/,
            file: 'tst.js',
            optional: true,
            default: true
        }
    },
    placeholders: {
        /* Template placeholders function, #NAME# in template will be replaced by component name */
        NAME: ({ componentName }) => componentName,
        STYLE: ({ files }) => (files.style ? `\nimport styles from './${files.style.name}';\n` : ''),
        STORY_PATH: ({ join, project, destinationFolder, componentName }) =>
            join(project, destinationFolder, componentName)
    }
};
