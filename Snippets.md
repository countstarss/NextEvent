``` json
{
	"Print to console": {
		"prefix": "cl",
		"scope": "javascript,typescript,javascriptreact",
		"body": [
			"console.log($1)"
		],
		"description": "console.log"
	},
	"reactComponent": {
		"prefix": "rfc",
		"scope": "javascript,typescript,javascriptreact",
		"body": [
			"function ${1:${TM_FILENAME_BASE}}() {",
			"\treturn (",
			"\t\t<div>",
			"\t\t\t$0",
			"\t\t</div>",
			"\t)",
			"}",
			"",
			"export default ${1:${TM_FILENAME_BASE}}",
			""
		],
		"description": "React component"
	},
	"reactStyledComponent": {
		"prefix": "rsc",
		"scope": "javascript,typescript,javascriptreact",
		"body": [
			"import styled from 'styled-components'",
			"",
			"const Styled${TM_FILENAME_BASE} = styled.$0``",
			"",
			"function ${TM_FILENAME_BASE}() {",
			"\treturn (",
			"\t\t<Styled${TM_FILENAME_BASE}>",
			"\t\t\t${TM_FILENAME_BASE}",
			"\t\t</Styled${TM_FILENAME_BASE}>",
			"\t)",
			"}",
			"",
			"export default ${TM_FILENAME_BASE}",
			""
		],
		"description": "React styled component"
	},
    "Mark": {
		"prefix": "mark",
		"body": [
			"// MARK: - $markSection",
		],
		"description": "Mark Snippets"
	},
	"commet": {
		"prefix": "commet",
		"body": [
			"//\n// $ProjectName\n// $now()\n// $LukeKing\n//",
		],
		"description": "commet Snippets"
	},
	"CSS-MARK": {
		"prefix": "TODO",
		"body": [
			"/*\nTODO: $TODO\nMARK: - $TODO\n*/",
		],
		"description": "Mark Snippets"
	},
	"NextJS-className": {
		"prefix": "cc",
		"body": [
			"className={ classes.$ClassName }",
		],
		"description": "ClassName Snippets"
	},
	"NextJS-useEffect": {
		"prefix": "useEffect",
		"body": [
			"useEffect(() => {\n\n},[${Dependence}])",
		],
		"description": "ClassName Snippets"
	},
	"Next-API": {
		"prefix": "nextapi",
		"body": [
			"function handler(req, res) {",
            "\n\u0020\u0020\u0020\u0020if(req.method === 'POST'){",
            "\n\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020//POST\n",
            "\u0020\u0020\u0020\u0020}else if(req.method === 'DELETE'){\n","\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020//DELETE\n",
            "\u0020\u0020\u0020\u0020}else if(req.method === 'PUT'){\n","\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020//PUT\n",
            "\u0020\u0020\u0020\u0020}else{\n",
            "\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020//GET\n",
            "\u0020\u0020\u0020\u0020}\n",
            "}\n",
            "\n",
            "export default handler;"
		],
		"description": "ClassName Snippets"
	}
}
```