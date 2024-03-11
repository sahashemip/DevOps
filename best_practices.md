
# React Native
- Why choose React Native?
    - **Performant:** The use of native UI components makes the framework highly performant. You save time by creating platform-specific versions of components from a single codebase.
    - **Flexible:** One codebase, multiple platforms. You can use React Native in your existing Android and iOS project or create a whole new app from scratch.
    - **UI-focused:** React Native’s focus on UI helps apps load quickly which lends to a smoother experience. You can render UI for both iOS and Android platforms.
    - **Native approach:** You can make apps for both web and mobile with the same components used to create iOS, Android, and web versions with no drops in performance.
    - **Community-driven:** React Native has a large number of contributors and repositories on GitHub. It’s also supported by companies such as Facebook and Microsoft.
    - **Fast and efficient:** The use of native UI components makes the framework highly performant. You save time by creating platform-specific versions of components from a single codebase.


## What convention should I use to name directories in a React Native project? Is CamelCase fine?
- **Directories and Files:** `kebab-case` is used especially when they are not directly representing classes or React components. For example, `user-profile` or `shopping-cart`. This approach is appreciated for its readability, especially in URLs and when accessing files from the command line.
- **Components or Classes:** `PascalCase` is used, e.g. `UserProfile.js` or `ShoppingCart.js`.

    
## What is the "BEST PRACTICE"?
- To optimise development workflows and ensure the success of projects, developers adhere to a set of **musts** known as **best practices**. So, the best practices contribute to the creation of high-quality and efficient applications owing to:
- **Code Structure and Organization:** Best practices involve maintaining a modular and scalable code structure, dividing components into separate files, and organising directories logically. This enhances code readability, maintainability, and facilitates collaboration among team members.
- **Component Reusability:** Leveraging component-based architecture is a fundamental best practice. Creating reusable components enhances code efficiency and reduces redundancy. This approach ensures that developers can easily share and integrate components across different parts of the application.

## React Native-style Best Practices:

- **Organise Project Structure**
    - Segment your codebase into **logical modules**, **components**, and **screens**.
        - This streamlines development and foster an efficient and coherent app-building process.
        - This maintains a clear separation of concerns, as empowers developers to focus on specific features without facing conflicts or confusion.
            - `assets`  Put all your static assets, such as fonts and images and organize these assets into separate subdirectories for each asset type: e.g `images`, `fonts`.
            - `screens` Put all your application screens or pages in it. Each screen should have its own directory with the its files.
            - `navigation` Put all your navigation-related code.
            - `components` Put all your reusable components.
            - `hooks` Put all your custom hooks. Each hook should have its own file.
            - `services` Put all your code related to external services, such as APIs. It's a good idea to organize these services into separate subdirectories for each service type.
            - `utils` It contains various utility functions that are not related to a specific feature or module of the app.
- **Use Functional Components**
    - Opt for functional components over class components, and leverage the potential of hooks like `useState`, `useEffect`, and `useContext` to effectively manage state and handle side-effects in your application.
     
- **Optimise Image Assets**
    - Use tools for compressing and resizing images before adding them to your project.
        - React Native’s `Image` component is excellent for caching and loading images with various options.

- **Limit the Use of Third-party Libraries**
    - Consider its relevance and make sure it’s being regularly maintained and updated.
    - Keep a watch on the app’s bundle size to prevent any unnecessary extra weight caused by adding new libraries.

- **Implement Code Splitting**
    - Decrease the app’s initial load time and enhance performance.
        - This technique lets you load only the necessary code for a specific screen or feature when required. 
        - One migth use the 3rd-party tools such as `react-native-bundle-splitter` to implement this strategy.

- **Memory Management**
    - To prevent memory leaks, clean up event listeners, timers, and subscriptions when components unmount.
        - To handle this, you can use the cleanup function in the `useEffect` hook.
        - This is essential to be conscious of large data sets in memory, so consider using pagination or lazy-loading techniques when dealing with extensive lists or images.

- **Optimise Performance for FlatList**
    - To ensure that React identifies items accurately, it is vital to supply a distinctive `keyExtractor` prop.
    - To optimise the rendering process for lengthy lists, consider using the `getItemLayout` prop or `initialNumToRender`.

- **Test on Real Devices**
    - Test your React Native application on real devices to ensure its proper functionality across various devices and operating system versions.


# GitHub
## Git Branching Strategies (best practices for naming branches):

- **Use Separators**
    - Use separators such as hyphen (-) to increase readability of the name, e.g.: `optimize-data-analysis`

- **Start Name with Category Word**
    - It is recommended to begin the name of a branch with a category word, which indicates the type of task that is being solved with that branch. Some of the most used category words are:
        - `hotfix`: for quickly fixing critical issues, usually with a temporary solution
        - `bugfix`: for fixing a bug
        - `eature`: for adding, removing or modifying a feature
        - `test`: for experimenting something which is not an issue
        - `wip`: for a work in progress

- **Use the ID of the Issue**
    - Use the ID of the related issue in the branch name to make it easy to identify the task and keep track of its progress, e.g: `wip-451-optimize-data-analysis`

- **Include Author Name** 
    - Another approach is to also include the name of the author working on the branch, to keep track of developers' work. Usually, the name of the author is the first element of the branch name, according to this format: `author-category-name`, e.g. `jane.doe-bugfix-broken-link`

- **Avoid Long Branch Names**
    - As much as the branch name needs to be informative, it also needs to be precise and short. Detailed and long names can affect readability and efficiency
    
    
    
    
    
    
    
    

