*Dynamic Values*
## 1.Variables-
we can embed any JS variable within JSX by enclosing it in curly braces `{}`. The value of the variable will be inserted into the DOM at the respected location.

## 2.Expressions-
JSX allows us to write JS expressions inside curly braces `{}`. This includes operations, function calls, and other JS expressions that produce a value.

## 3.Function Calls-
functions, especially those that return JSX, can be invoked directly within JSX.

*Important*
* React doest not render `false`, `null`, `NaN` in the DOM. These values, when used in JSX, will result in nothing being displayed.
* However `0` and `""` are exceptional: `0` and `""` considered valid outputs and are rendered as well.

*Import Export*
## Default Export-
A file can have only one default export.
## Default Import-
When importing a default export, we can name the import whatever we like.

## Named Export-
a file can have multiple named exports. Each named export must be explicitly exported.
## Named Import-
When importing named exports, the import names must match the exports name exactly. Named imports must be enclosed in curly braces `{}`.

## Mixed Export-
a file can have multiple named exports and one Default export. Basically Named and Default Export Together is called Mixed Export.
## Mixed Import-
When importing named exports, it must be enclosed in curly braces `{}`. And importing default export, it should be outside of curly braces `{}`.