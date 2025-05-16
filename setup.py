from setuptools import setup, find_packages

with open("erpforever_theme/version.py") as f:
    exec(f.read())

setup(
    name='erpforever_theme',
    version=__version__,
    description='ERPForever Custom theme',
    author='Mojeer Salman',
    author_email='info@iweb.ps',
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=[],
)
