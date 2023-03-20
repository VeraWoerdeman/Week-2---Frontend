import React from 'react'; 
import Footer from '../components/Footer'
import Header from '../components/Header'
import AddItemForm  from '../components/AddItemForm';
import Collection from '../pages/Collection'

class Home extends React.Component { 
    render() { 
        return (
            <div>
            <Header
         onSortByYearRecent={this.handleSortByYearRecent}
         onSortByNameAZ={this.handleSortByNameAZ}
         onSortByNameZA={this.handleSortByNameZA}
         onSortByAlbumAZ={this.handleSortByAlbumAZ}
         onSortByAlbumZA={this.handleSortByAlbumZA}
         onSortByYear={this.handleSortByYear}
         nextPage={this.handleNextPage}
         previousPage={this.handlePreviousPage}
         onCategoryChange={this.handleCategoryChange}
         homePage={this.handleHomeScreen}
         toggleForm={this.toggleForm}
         currentPage={currentPage}
        />
       <div className="App">
          <div className="row row-col mt-3 justify-content-center">
            {this.state.showForm ? (
              <AddItemForm handleAddItem={this.handleAddItem} 
              handleCancel={this.handleHomeScreen}/>
            ) : (
              renderedCards
            )}
            <Collection></Collection>

          </div>
          <Footer />
        </div>
      </div>
    );
        
    }
}
export default Home;