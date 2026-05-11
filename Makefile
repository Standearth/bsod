github:
	touch docs/.nojekyll
	echo "microsoftlies.com" > docs/CNAME
	git add -A
	git commit -m "update github pages"
	git push