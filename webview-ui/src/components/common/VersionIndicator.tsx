import React from "react"
import { Package } from "@roo/package"

interface VersionIndicatorProps {
	onClick?: () => void
	className?: string
}

// Datacoves: display-only version pill. Strips the `-datacoves` prerelease suffix
// for display and is intentionally non-interactive (no announcement on click).
const VersionIndicator: React.FC<VersionIndicatorProps> = ({ className = "" }) => {
	const version = Package.version.replace(/-datacoves$/, "")

	return (
		<div className={`text-xs text-vscode-descriptionForeground rounded-full px-2 py-1 border ${className}`}>
			v{version}
		</div>
	)
}

export default VersionIndicator
