"""Add is_open field for poll model, as well as some default values

Revision ID: bfc5334a2ecd
Revises: 476f177f4ba0
Create Date: 2019-11-29 22:49:23.114331

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bfc5334a2ecd'
down_revision = '476f177f4ba0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('poll', sa.Column('is_open', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('poll', 'is_open')
    # ### end Alembic commands ###
